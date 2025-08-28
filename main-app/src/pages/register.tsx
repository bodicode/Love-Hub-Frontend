import { useRouter } from "next/router";
import { useState } from "react";
import { api } from "../lib/fetcher";

export default function Register() {
  const r = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    try {
      await api("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password, name }),
      });
      r.push("/dashboard");
    } catch (e: any) {
      setErr(e.message);
    }
  }

  return (
    <div
      style={{ maxWidth: 420, margin: "80px auto", fontFamily: "system-ui" }}
    >
      <h1>Đăng ký</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Tên"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            margin: "8px 0",
            padding: 8,
          }}
        />
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
        <button type="submit">Register</button>
      </form>
      {err && <p style={{ color: "crimson" }}>{err}</p>}
      <p>
        <a href="/login">Đăng nhập</a>
      </p>
    </div>
  );
}
