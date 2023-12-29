import React, { useEffect } from "react";
import Image from "next/image";
import { getShow } from "@/data/shows";
import qs from "qs";
import { Show } from "@/types/types";
import { notFound } from "next/navigation";
import { sanitize } from "isomorphic-dompurify";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: string;
}) {
  const response = params.id
    ? await getShow(params.id)
    : qs.parse(searchParams);

  if (response.status === 404) {
    notFound();
  }

  const result = Show.safeParse(response);

  let show;
  if (result.success) {
    show = result.data;
  } else {
    throw Error;
  }

  return (
    <main className="px-2 pb-16">
      <Image
        src={show.image.original}
        alt={`${show.name} poster`}
        fill
        className="object-cover blur -z-50 opacity-30"
      />
      <h2 className="font-black text-4xl mt-12 mb-12">{show.name}</h2>
      <section className="mt-12 bg-zinc-800/60 rounded-xl w-full border-solid border-zinc-700 border">
        <div className="relative">
          <Image
            src={show.image.original}
            alt={`${show.name} poster`}
            width={200}
            height={200}
            className="absolute inset-0 m-auto"
          />
          <Image
            src={show.image.original}
            alt={`${show.name} poster`}
            width={200}
            height={200}
            className="absolute inset-0 m-auto blur-md -z-10"
          />
        </div>
        <h2 className="font-black text-3xl mt-12">Synposis</h2>
        <div dangerouslySetInnerHTML={{ __html: sanitize(show.summary) }} />
      </section>
    </main>
  );
}
