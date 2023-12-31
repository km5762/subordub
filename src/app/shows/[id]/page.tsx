import React, { useEffect } from "react";
import Image from "next/image";
import { getShow } from "@/data/shows";
import qs from "qs";
import { Show } from "@/types/types";
import { notFound } from "next/navigation";
import { sanitize } from "isomorphic-dompurify";
import { Info } from "react-feather";
import { renderToString } from "react-dom/server";
import Container from "@/components/Container";
import Tag from "@/components/Tag";

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
    <main className="px-4 py-2">
      {show.image && (
        <Image
          src={show.image.medium}
          alt={`${show.name} poster`}
          fill
          className="object-cover blur -z-50 opacity-30"
        />
      )}
      <div className="my-3">
        <h2 className="font-black text-4xl">{show.name}</h2>
        <p>
          ({show.premiered?.slice(0, 4)} -{" "}
          {show.ended?.slice(0, 4) ?? "Present"}) | {show.schedule.days}s @{" "}
          {show.schedule.time} | {show.averageRuntime}m
        </p>
      </div>
      <Container className="w-full space-y-4">
        <Container className="w-full md:flex justify-center space-x-4">
          {show.image && (
            <div
              className="relative md:w-72 shrink-0"
              style={{ minHeight: "25em" }}
            >
              <Image
                src={show.image.original}
                alt={`${show.name} poster`}
                className="object-cover absolute z-10"
                fill
              />
              <Image
                src={show.image.medium}
                alt={`${show.name} poster`}
                fill
                className="absolute object-cover blur"
              />
            </div>
          )}
          <div className="md:flex flex-col justify-between">
            <div>
              <h2 className="font-black text-3xl mb-3">Synposis</h2>
              {show.summary && (
                <div
                  className="leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{ __html: sanitize(show.summary) }}
                />
              )}
            </div>
            <div className="flex flex-wrap">
              <Tag>{show.language}</Tag>
              <Tag>{show.type}</Tag>
              {show.genres.map((genre) => (
                <Tag>{genre}</Tag>
              ))}
            </div>
          </div>
        </Container>
        <Container>
          <h2 className="font-black text-3xl mb-3">Reviews</h2>
        </Container>
      </Container>
    </main>
  );
}
