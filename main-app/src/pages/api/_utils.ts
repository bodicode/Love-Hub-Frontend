import type { NextApiRequest, NextApiResponse } from "next";
import cookie from "cookie";
import { serialize } from "cookie";

export const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;
export const JWT_COOKIE_NAME = process.env.JWT_COOKIE_NAME || "lh_token";

export function setAuthCookie(res: NextApiResponse, token: string) {
  const isProd = process.env.NODE_ENV === "production";
  res.setHeader(
    "Set-Cookie",
    serialize(JWT_COOKIE_NAME, token, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 ngày
    })
  );
}

export function clearAuthCookie(res: NextApiResponse) {
  res.setHeader(
    "Set-Cookie",
    serialize(JWT_COOKIE_NAME, "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 0,
    })
  );
}

export async function backendFetch(
  path: string,
  init: RequestInit = {},
  token?: string
) {
  const headers = new Headers(init.headers || {});
  headers.set("Content-Type", "application/json");
  if (token) headers.set("Authorization", `Bearer ${token}`);
  const res = await fetch(`${API_BASE}${path}`, { ...init, headers });
  const json = await res.json().catch(() => ({}));
  if (!res.ok)
    throw Object.assign(new Error(json?.message || "Error"), {
      status: res.status,
      payload: json,
    });
  return json;
}
