export async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const r = await fetch(url, {
    ...init,
    credentials: 'include', 
    headers: { 'Content-Type': 'application/json', ...(init?.headers || {}) },
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j?.message || 'Error');
  return j;
}
