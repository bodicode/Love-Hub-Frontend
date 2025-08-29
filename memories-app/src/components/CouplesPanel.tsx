"use client";

import * as React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "@/lib/fetcher";

export default function CouplesPanel() {
  const qc = useQueryClient();
  const me = useQuery({
    queryKey: ["me"],
    queryFn: () => api("/api/users/me"),
  });

  const createCouple = useMutation({
    mutationFn: () => api("/api/couples/create", { method: "POST" }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["me"] }),
  });
  const joinCouple = useMutation({
    mutationFn: (code: string) =>
      api("/api/couples/join", {
        method: "POST",
        body: JSON.stringify({ code }),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["me"] }),
  });
  const setCurrent = useMutation({
    mutationFn: (id: string) =>
      api("/api/couples/set-current", {
        method: "POST",
        body: JSON.stringify({ coupleId: id }),
      }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["me"] }),
  });

  const [code, setCode] = React.useState("");

  if (me.isLoading) return <p>Loading…</p>;
  if (me.isError) return <p>Lỗi: {(me.error as any)?.message}</p>;
  const user = me.data as any;
  const memberCouples = (user.memberships || []).map((m: any) => ({
    ...m.couple,
    role: m.role,
  }));

  return (
    <div style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
      <h2>Couples</h2>

      <div style={{ margin: "12px 0" }}>
        <button
          onClick={() => createCouple.mutate()}
          disabled={createCouple.isPending}
        >
          {createCouple.isPending ? "Đang tạo…" : "Tạo couple"}
        </button>
      </div>

      <div style={{ margin: "12px 0" }}>
        <input
          placeholder="Join code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ padding: 8, marginRight: 8 }}
        />
        <button
          onClick={() => joinCouple.mutate(code)}
          disabled={joinCouple.isPending}
        >
          Join
        </button>
      </div>

      <div style={{ marginTop: 16 }}>
        <h4>
          Current: {user.currentCouple ? <b>{user.currentCouple.code}</b> : "—"}
        </h4>
        <ul>
          {memberCouples.map((c: any) => (
            <li key={c.id} style={{ margin: "6px 0" }}>
              <b>{c.code}</b> ({c.role}) •{" "}
              {new Date(c.startedAt).toLocaleDateString()}
              <button
                style={{ marginLeft: 8 }}
                onClick={() => setCurrent.mutate(c.id)}
              >
                Set current
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}