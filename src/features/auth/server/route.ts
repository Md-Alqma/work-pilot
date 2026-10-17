import { Hono } from "hono";
import { Account, Client, ID } from "node-appwrite";
import { zValidator } from "@hono/zod-validator";
import { setCookie, deleteCookie } from "hono/cookie";

import { createAdminClient } from "@/lib/appwrite";
import { sessionMiddleware } from "@/lib/session-middleware";

import { AUTH_COOKIE } from "../constants";
import { loginSchema, registerSchema } from "../schemas";
import { getAuthCookieOptions } from "./auth-cookie";
import { resolvePostAuthRedirect } from "./resolve-post-auth-redirect";

async function getUserFromSession(sessionSecret: string) {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setSession(sessionSecret);

  return new Account(client).get();
}

const app = new Hono()
  .get("/current", sessionMiddleware, (c) => {
    const user = c.get("user");
    return c.json({ data: user });
  })
  .post("/login", zValidator("json", loginSchema), async (c) => {
    const { email, password } = c.req.valid("json");

    const { account } = await createAdminClient();

    const session = await account.createEmailPasswordSession(email, password);

    setCookie(c, AUTH_COOKIE, session.secret, getAuthCookieOptions());

    const { redirectTo, user } = await resolvePostAuthRedirect(session.secret);

    return c.json({ success: true, redirectTo, user });
  })
  .post("/register", zValidator("json", registerSchema), async (c) => {
    const { name, email, password } = c.req.valid("json");

    const { account } = await createAdminClient();
    await account.create(ID.unique(), email, password, name);

    const session = await account.createEmailPasswordSession(email, password);

    setCookie(c, AUTH_COOKIE, session.secret, getAuthCookieOptions());

    const user = await getUserFromSession(session.secret);

    return c.json({
      success: true,
      redirectTo: "/workspaces/create",
      user,
    });
  })
  .post("/logout", sessionMiddleware, async (c) => {
    const account = c.get("account");
    deleteCookie(c, AUTH_COOKIE);
    await account.deleteSession("current");
    return c.json({ success: true });
  });

export default app;
