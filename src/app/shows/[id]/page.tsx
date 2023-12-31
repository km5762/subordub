import React, { useEffect } from "react";
import Image from "next/image";
import { getShow } from "@/data/shows";
import qs from "qs";
import { Show } from "@/types/types";
import { notFound } from "next/navigation";
import { sanitize } from "isomorphic-dompurify";
import { Info } from "react-feather";
import { renderToString } from "react-dom/server";

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
      {show.image && (
        <Image
          src={show.image.original}
          alt={`${show.name} poster`}
          fill
          className="object-cover blur -z-50 opacity-30"
        />
      )}
      <h2 className="font-black text-4xl my-3">{show.name}</h2>
      <section className="bg-zinc-800/75 rounded-xl w-full border-solid border-zinc-700 border p-4 overflow-hidden space-y-4">
        <div className="bg-zinc-800/75 border-zinc-700 border-solid border rounded-xl p-4 sm:float-right sm:mb-0 flex">
          <div className="relative w-40 h-52 mr-4">
            {show.image && (
              <>
                <Image
                  src={show.image.original}
                  alt={`${show.name} poster`}
                  fill
                />
                <Image
                  src={show.image.original}
                  alt={`${show.name} poster`}
                  fill
                  className="relative blur-md -z-10"
                />
              </>
            )}
          </div>
          <div className="space-y-2">
            <button className="border-zinc-700 border-solid border rounded-full px-2 py-1 hover:bg-zinc-700 block">
              {show.type}
            </button>
            <button className="border-zinc-700 border-solid border rounded-full px-2 py-1 hover:bg-zinc-700 block">
              {show.language}
            </button>
            <p>
              ({show.premiered?.slice(0, 4)} -{" "}
              {show.ended?.slice(0, 4) ?? "Present"})
            </p>
            <p>
              {show.schedule.days}s | {show.schedule.time} |{" "}
              {show.averageRuntime}m
            </p>
            <p>{show.network?.name}</p>
          </div>
        </div>
        <h2 className="font-black text-3xl mb-3">Synposis</h2>
        {show.summary && (
          <div
            className="leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: sanitize(show.summary) }}
          />
        )}
        <div className="flex flex-wrap">
          {show.genres.map((genre) => (
            <button className="border-zinc-700 border-solid border rounded-full px-2 py-1 m-1 hover:bg-zinc-700">
              {genre}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
