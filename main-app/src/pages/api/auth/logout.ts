import type { NextApiRequest, NextApiResponse } from "next";
import { clearAuthCookie } from "../_utils";
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  clearAuthCookie(res);
  res.status(200).json({ ok: true });
}
