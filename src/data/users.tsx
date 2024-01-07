import "server-only";
import { cache } from "react";
import { connection } from "@/lib/planetscale";
import { z } from "zod";

export const getUser = cache(async (googleId: number) => {
  const { rows } = await connection.execute(
    "SELECT * FROM user WHERE google_id = ?",
    [googleId]
  );

  return rows[0];
});

export const createUser = cache(
  async (user: { id: string; googleId: number }) => {
    const { id, googleId } = user;
    await connection.execute("INSERT INTO user (id, google_id) VALUES (?, ?)", [
      id,
      googleId,
    ]);
  }
);
