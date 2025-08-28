import dynamic from "next/dynamic";

//@ts-ignore
const CouplesPanel = dynamic(() => import("memories/CouplesPanel"), {
  ssr: false,
  loading: () => <p>Loading couples…</p>,
});

export default function Dashboard() {
  return (
    <div
      style={{ maxWidth: 900, margin: "40px auto", fontFamily: "system-ui" }}
    >
      <h1>Dashboard</h1>
      <CouplesPanel />
      <p style={{ marginTop: 24 }}>
        <a href="/api/auth/logout">Đăng xuất</a>
      </p>
    </div>
  );
}
