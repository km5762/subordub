import "server-only";
import { cache } from "react";
import { Show } from "@/types/types";

export const getShow = cache(async (id: number) => {
  return (await fetch(`${process.env.SHOWS_API}/shows/${id}`)).json();
});
