"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import StarRating from "./StarRating";
import { Star } from "react-feather";

enum SubOrDub {
  Sub,
  Dub,
}

export default function AddReviewBox() {
  const [rating, setRating] = useState(0);
  const [subOrDub, setSubOrDub] = useState<SubOrDub | undefined>();

  function handleClick(event: React.MouseEvent) {
    event.preventDefault();
  }

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
          Heading
          <input
            type="text"
            name=""
            id=""
            className="block rounded w-full text-black px-2 py-1"
          />
        </label>
        <label className="block">
          Review
          <textarea className="block rounded w-full text-black px-2 py-1" />
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
