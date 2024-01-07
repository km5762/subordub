import "server-only";
import { connect } from "@planetscale/database";

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  fetch: (url: string, init: RequestInit | undefined) => {
    delete (init as any)["cache"]; // Remove cache header
    return fetch(url, init);
  },
};

export const connection = connect(config);
