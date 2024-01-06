import "server-only";
import { cache } from "react";
import { connection } from "@/lib/planetscale";
import { z } from "zod";

export const getUser = cache(async (email?: string | null) => {
  const { rows } = await connection.execute(
    "SELECT * FROM user WHERE email = ?",
    [email]
  );

  return rows[0];
});

export const createUser = cache(
  async (user: {
    email: string;
    username?: string | null;
    image?: string | null;
  }) => {
    const { email, username, image } = user;
    await connection.execute(
      "INSERT INTO user (username, email, image) VALUES (?, ?, ?)",
      [username, email, image]
    );
  }
);
