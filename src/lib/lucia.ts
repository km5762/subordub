import { PlanetScaleAdapter } from "@lucia-auth/adapter-mysql";
import { Lucia, Session, User } from "lucia";
import { connection } from "./planetscale";
import { Google } from "arctic";
import { cache } from "react";
import { cookies } from "next/headers";

const adapter = new PlanetScaleAdapter(connection, {
  user: "user",
  session: "user_session",
});

interface DatabaseUserAttributes {
  google_id: number;
  username: string;
}

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      googleId: attributes.google_id,
      username: attributes.username,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

const config = {
  experimental: {
    serverComponentsExternalPackages: ["oslo"],
  },
};

export const google = new Google(
  process.env.GOOGLE_CLIENT_ID!,
  process.env.GOOGLE_CLIENT_SECRET!,
  process.env.NODE_ENV === "production"
    ? "https://lucia.subordub.pages.dev/api/login/google/callback"
    : "http://localhost:3000/api/login/google/callback"
);

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const result = await lucia.validateSession(sessionId);
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes
        );
      }
    } catch {}
    return result;
  }
);
