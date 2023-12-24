"use client";

import React, { useState, useMemo } from "react";
import { Search, ArrowRight } from "react-feather";
import Link from "next/link";
import { z } from "zod";
import debounce from "lodash/debounce";

const Suggestion = z.object({
  id: z.string(),
  image: z.string(),
  releaseDate: z.string(),
  subOrDub: z.string(),
  title: z.string(),
  url: z.string(),
});

type Suggestion = z.infer<typeof Suggestion>;

export default function SearchBar({ className }: { className: string }) {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const debouncedHandleChange = useMemo(() => {
    return debounce(handleChange, 500);
  }, []);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      const response = await fetch(
        `https://subordub-consumet.vercel.app/anime/gogoanime/${value}?`
      );

      const json = await response.json();

      const result = z.array(Suggestion).safeParse(json.results);

      if (!result.success) {
        console.error("Error occured during search");
      } else {
        const hasMatchingDub = (suggestion: Suggestion) => {
          return (
            suggestion.subOrDub === "sub" &&
            result.data.some(
              (result) =>
                result.id.replace(/-dub$/, "") === suggestion.id &&
                result.subOrDub === "dub"
            )
          );
        };

        setSuggestions(result.data.filter((result) => hasMatchingDub(result)));
      }
    }
  }

  return (
    <>
      <div className={className ?? "relative"}>
        <Search className="absolute z-10 top-1/2 -translate-y-1/2 text-zinc-400 ml-1" />
        <input
          type="search"
          className={
            "p-2 pl-8 pr-10 bg-zinc-800 border text-white shadow-lg border-zinc-700 border-solid focus:outline-none " +
            (search && suggestions.length > 0 ? "rounded-t-2xl" : "rounded-2xl")
          }
          onChange={debouncedHandleChange}
        />
        <button className="absolute z-10 top-1/2 -translate-y-1/2 right-0 mr-1 ml-1 bg-pink-600 rounded-full py-1 px-2 hover:bg-pink-700">
          <ArrowRight className="text-white" />
        </button>
        {search && suggestions.length > 0 && (
          <div className="absolute z-50 w-full rounded-b-2xl overflow-hidden shadow-lg border border-solid border-zinc-700">
            <ul className="bg-zinc-800">
              {suggestions.slice(0, 5).map((suggestion) => (
                <li className="hover:bg-zinc-700 pl-8 p-2" key={suggestion.id}>
                  <Link href={`/shows/${suggestion.id}`}>
                    {suggestion.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
