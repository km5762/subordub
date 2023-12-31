import React, { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <button className="border-zinc-700 border-solid border rounded-full px-2 py-1 m-1 hover:bg-zinc-700">
      {children}
    </button>
  );
}
