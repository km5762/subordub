import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";
import { createUser, getUser } from "@/data/users";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  //   callbacks: {
  //     async signIn() {
  //       if (window) {
  //         window.location.reload();
  //       }
  //       return true;
  //     },
  //   },
};
