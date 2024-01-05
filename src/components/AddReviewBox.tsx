"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import StarRating from "./StarRating";
import { Star } from "react-feather";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

enum SubOrDub {
  Sub,
  Dub,
}

export default function AddReviewBox({ session }: { session: Session | null }) {
  const [rating, setRating] = useState(0);
  const [subOrDub, setSubOrDub] = useState<SubOrDub | undefined>();

  function handleClick(event: React.MouseEvent) {
    event.preventDefault();
  }

  useEffect(() => {
    console.log(session);
  }, [session]);

  return (
    <Container>
      <form action="GET" className="space-y-2 w-full">
        <h3 className="mb-3">
          Add a review as <b>Anonymous</b>
        </h3>
        <div>
          <label className="block -mb-1">Rating</label>
          <div className="flex gap-4">
            <StarRating
              fullClassName="fill-white"
              rating={rating}
              setRating={setRating}
            />
            <input type="hidden" name="rating" value={rating} />
            <div className="flex space-between gap-4 inline-block">
              <input
                type="button"
                className={
                  "font-bold border-solid border border-zinc-700 rounded-full px-2 py-1 hover:bg-zinc-700 text-orange-600 cursor-pointer " +
                  (subOrDub === SubOrDub.Sub ? "bg-zinc-700 " : "")
                }
                onClick={() => setSubOrDub(SubOrDub.Sub)}
                value="SUB"
              />
              <input
                type="button"
                className={
                  "font-bold border-solid border border-zinc-700 rounded-full px-2 py-1 hover:bg-zinc-700 text-purple-600 cursor-pointer " +
                  (subOrDub === SubOrDub.Dub ? "bg-zinc-700" : "")
                }
                onClick={() => setSubOrDub(SubOrDub.Dub)}
                value="DUB"
              />
              <input type="hidden" name="sub-or-dub" value={subOrDub} />
            </div>
          </div>
        </div>
        <label className="block">
          Title
          <input
            type="text"
            name="title"
            className="block rounded w-full px-2 py-1"
          />
        </label>
        <label className="block">
          Review
          <textarea className="block rounded w-full px-2 py-1" name="text" />
        </label>
        <div className="flex justify-end">
          <input
            type="submit"
            value="Add review"
            className="font-bold mt-3 bg-pink-600 rounded-full px-4 py-2"
          />
        </div>
      </form>
    </Container>
  );
}
