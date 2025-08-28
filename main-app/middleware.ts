import { NextRequest, NextResponse } from "next/server";

const PROTECTED = [/^\/dashboard/, /^\/couples/];

export function middleware(req: NextRequest) {
  const token = req.cookies.get(
    process.env.JWT_COOKIE_NAME || "lh_token"
  )?.value;
  const isProtected = PROTECTED.some((r) => r.test(req.nextUrl.pathname));
  if (isProtected && !token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
