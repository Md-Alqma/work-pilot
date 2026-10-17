import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { AUTH_COOKIE } from "@/features/auth/constants";
import { getAuthCookieOptions } from "@/features/auth/server/auth-cookie";
import { resolvePostAuthRedirect } from "@/features/auth/server/resolve-post-auth-redirect";

import { createAdminClient } from "@/lib/appwrite";

export async function GET(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("userId");
  const secret = request.nextUrl.searchParams.get("secret");

  if (!userId || !secret)
    return new NextResponse("Missing fields", { status: 400 });

  const { account } = await createAdminClient();
  const session = await account.createSession(userId, secret);

  const cookieOptions = getAuthCookieOptions();
  cookies().set(AUTH_COOKIE, session.secret, cookieOptions);

  const { redirectTo } = await resolvePostAuthRedirect(session.secret);

  return NextResponse.redirect(`${request.nextUrl.origin}${redirectTo}`);
}
