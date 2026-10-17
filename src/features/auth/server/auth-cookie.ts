import "server-only";

export const AUTH_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

export function getAuthCookieOptions() {
  return {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict" as const,
    maxAge: AUTH_COOKIE_MAX_AGE,
  };
}
