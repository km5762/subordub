import { z } from "zod";

export const Show = z.object({
  id: z.number(),
  image: z
    .object({
      medium: z.string(),
      original: z.string(),
    })
    .nullable(),
  summary: z.string().nullable(),
  name: z.string(),
  url: z.string(),
});

export const Suggestion = z.object({
  score: z.number(),
  show: Show,
});

export type Show = z.infer<typeof Show>;

export type Suggestion = z.infer<typeof Suggestion>;
