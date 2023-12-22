"use client";

import React, { useState } from "react";
import { Search, ArrowRight } from "react-feather";
import Link from "next/link";

export default function SearchBar({ className }: { className: string }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className={className ?? "relative"}>
        <Search className="absolute z-20 top-1/2 -translate-y-1/2 text-zinc-400 ml-1" />
        <input
          type="search"
          className={
            "text-black p-2 pl-8 pr-10 bg-zinc-800 border-solid border-zinc-500 text-white shadow-lg " +
            (search ? "rounded-t-2xl" : "rounded-2xl")
          }
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="absolute z-20 top-1/2 -translate-y-1/2 right-0 mr-1 ml-1 bg-pink-600 rounded-full py-1 px-2 hover:bg-pink-700">
          <ArrowRight className="text-white" />
        </button>
        {search && (
          <div className="absolute z-10 bg-white w-full rounded-b-2xl overflow-hidden shadow-lg">
            <ul className="bg-zinc-800">
              <li className="hover:bg-zinc-700 pl-8 p-2">
                <Link href={"/content"}>Page</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
