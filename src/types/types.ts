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
  type: z.string(),
  premiered: z.string().nullable(),
  ended: z.string().nullable(),
  genres: z.array(z.string()),
  language: z.string(),
  averageRuntime: z.number().nullable(),
  schedule: z.object({
    time: z.string(),
    days: z.array(z.string()),
  }),
  network: z
    .object({
      name: z.string(),
    })
    .nullable(),
});

export const Suggestion = z.object({
  score: z.number(),
  show: Show,
});

export type Show = z.infer<typeof Show>;

export type Suggestion = z.infer<typeof Suggestion>;
