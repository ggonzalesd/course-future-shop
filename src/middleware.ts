import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/login", "/signup"],
};

export default function middeware(request: NextRequest) {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;
  if (accessToken) {
    return NextResponse.redirect(new URL("/store", request.url));
  }
}
