"use client";

import DOMPurify from "dompurify";

export default function ShowSynopsis({ summary }: { summary: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(summary),
      }}
    />
  );
}
