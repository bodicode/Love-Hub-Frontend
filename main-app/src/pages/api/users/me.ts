import type { NextApiRequest, NextApiResponse } from "next";
import { backendFetch, JWT_COOKIE_NAME } from "../_utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.cookies[JWT_COOKIE_NAME];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const data = await backendFetch("/users/me", { method: "GET" }, token);
    res.status(200).json(data);
  } catch (e: any) {
    res
      .status(e.status || 500)
      .json(e.payload || { message: e.message || "Error" });
  }
}
