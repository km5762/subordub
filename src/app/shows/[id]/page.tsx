import React, { useEffect } from "react";
import Image from "next/image";
import { getShow } from "@/data/shows";
import qs from "qs";
import { Show } from "@/types/types";
import { notFound } from "next/navigation";
import { sanitize } from "isomorphic-dompurify";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import { Star } from "react-feather";
import HorizontalBarChart from "@/components/HorizontalBarChart";
import ReviewCard from "@/components/ReviewCard";
import AddReviewBox from "@/components/AddReviewBox";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/nextauth";
import { useSession } from "next-auth/react";

export default async function Page({
  params,
  searchParams,
}: {
  params: { id: number };
  searchParams: string;
}) {
  console.log(process.env.NEXTAUTH_SECRET);
  const session = await getServerSession(authOptions);

  console.log(session);

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
    <main className="sm:px-4 py-4 flex flex-col items-center">
      <div>
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
        <Container className="w-full max-w-6xl space-y-4">
          <Container className="w-full md:flex justify-center space-x-4 space-y-4">
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
            <div className="md:flex flex-col justify-between space-y-4">
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
          <h2 className="font-black text-3xl mb-3">Breakdown</h2>
          <Container className="space-y-4">
            <div className="flex justify-evenly">
              <div className="border-solid border-r flex-1 border-zinc-700 text-center">
                <p className="font-black text-4xl text-orange-600">8.9</p>
                <p>Sub Score</p>
              </div>
              <div className="border-solid border-l flex-1 border-zinc-700 text-center">
                <p className="font-black text-4xl text-purple-600">7.3</p>
                <p>Dub Score</p>
              </div>
            </div>
            <h3 className="font-bold text-xl">Popularity</h3>
            <HorizontalBarChart
              values={{ sub: 70, dub: 36 }}
              labels={{
                sub: (
                  <span>
                    56 <span className="font-light">reviews</span>
                  </span>
                ),
                dub: (
                  <span>
                    36 <span className="font-light">reviews</span>
                  </span>
                ),
              }}
            />
            <h3 className="font-bold text-xl">Average Rating</h3>
            <HorizontalBarChart
              values={{ sub: 8.9, dub: 5 }}
              labels={{
                sub: (
                  <>
                    <span className="align-middle">8.9</span>
                    <Star className="inline-block scale-[65%] fill-white" />
                  </>
                ),
                dub: (
                  <>
                    <span className="align-middle">5</span>
                    <Star className="inline-block scale-[65%] fill-white" />
                  </>
                ),
              }}
            />
          </Container>
          <h2 className="font-black text-3xl mb-3">Reviews</h2>
          <Container className="hidden sm:block space-y-4">
            <AddReviewBox session={session} />
            <ReviewCard rating={8} />
          </Container>
          <div className="sm:hidden space-y-4">
            <AddReviewBox session={session} />
            <ReviewCard rating={8} />
          </div>
        </Container>
      </div>
    </main>
  );
}
