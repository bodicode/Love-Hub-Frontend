"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { api } from "../lib/fetcher";

export default function Login() {
  const r = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    try {
      await api("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      r.push(searchParams.get("next") || "/dashboard");
    } catch (e: any) {
      setErr(e.message);
    }
  }

  return (
    <div
      style={{ maxWidth: 420, margin: "80px auto", fontFamily: "system-ui" }}
    >
      <h1>Đăng nhập</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            margin: "8px 0",
            padding: 8,
          }}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            margin: "8px 0",
            padding: 8,
          }}
        />
        <button type="submit">Login</button>
      </form>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      <p>
        <a href="/register">Đăng ký</a>
      </p>
    </div>
  );
}
