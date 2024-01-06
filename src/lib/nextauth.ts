import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";
import { createUser, getUser } from "@/data/users";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { getServerSession as originalGetServerSession } from "next-auth";
import { connection } from "./planetscale";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.username = token.username;
      return session;
    },
    async jwt({ token }) {
      const user = await getUser(token.email);
      token.username = user?.username;
      return token;
    },
  },
};

// export async function getServerSession(
//   ...args: Parameters<typeof originalGetServerSession>
// ): ReturnType<typeof originalGetServerSession> {
//   const session = await originalGetServerSession(authOptions);

//   if (session === null) {
//     return session
//   }

//   if (await getUser(session.user?.email)) {

//   }
// }
