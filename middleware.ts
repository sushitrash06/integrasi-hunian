import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Origin", "*"); // Ganti * dengan domain frontend
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: res.headers });
  }

  return res;
}

// Konfigurasi agar middleware hanya berjalan di API routes
export const config = {
  matcher: "/api/:path*",
};
