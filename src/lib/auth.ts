import { db } from "@/db/drizzle";
import { env } from "@/env";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  secret: env.BETTER_AUTH_SECRET,
  baseUrl: env.NEXT_PUBLIC_BETTER_AUTH_URL,
  plugins: [nextCookies()],
});
