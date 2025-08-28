import type { NextApiRequest, NextApiResponse } from "next";
import { backendFetch, setAuthCookie } from "../_utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const data = await backendFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify(req.body || {}),
    });
    setAuthCookie(res, data.access_token);
    res.status(200).json(data);
  } catch (e: any) {
    res
      .status(e.status || 500)
      .json(e.payload || { message: e.message || "Register error" });
  }
}
