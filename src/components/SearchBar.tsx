import React from "react";
import { Search, ArrowRight } from "react-feather";

export default function SearchBar({ className }: { className: string }) {
  return (
    <div className={className ?? "relative"}>
      <Search className="absolute z-20 top-1/2 -translate-y-1/2 text-zinc-500 ml-1" />
      <input type="search" className="rounded-full text-black p-2 pl-8 pr-10" />
      <button className="absolute z-20 top-1/2 -translate-y-1/2 right-0 mr-1 ml-1 bg-pink-600 rounded-full py-1 px-2">
        <ArrowRight className="text-white" />
      </button>
    </div>
  );
}
