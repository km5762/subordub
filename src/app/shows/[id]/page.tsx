import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className="px-2 pb-16">
      <h1>{params.slug}</h1>
    </main>
  );
}
