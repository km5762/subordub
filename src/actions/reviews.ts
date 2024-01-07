"use server";
import "server-only";

import { headers } from "next/headers";
import z from "zod";

export async function createReview(formData: FormData) {
  console.log(headers().get("CF-Connecting-IP"));

  return;

  // if (!session) {
  //   return {
  //     error: "User is not authenticated",
  //   };
  // }

  // if (!session.user.username) {
  //   return {
  //     error: "User has not completed account setup",
  //   };
  // }

  // const rawFormData = {
  //   rating: formData.get("rating"),
  //   subOrDub: formData.get("sub-or-dub"),
  //   title: formData.get("title"),
  //   text: formData.get("text"),
  // };

  // const parsedRawFormData = z.object({
  //   rating: z.number(),
  //   subOrDub: z.enum(["sub", "dub"]),
  //   title: z.string(),
  //   text: z.string(),
  // });
}
