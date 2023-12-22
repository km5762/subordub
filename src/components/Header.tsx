import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-zinc-800/75 p-6 flex justify-between items-center sticky top-0 z-30 backdrop-blur-2xl shadow-xl border-zinc-700 border-solid border-b">
      <Link href={"/"}>
        <h1 className="font-black text-2xl">
          <span className="text-orange-600">Sub</span>
          <span className="">||</span>
          <span className="text-purple-600">Dub</span>
        </h1>
      </Link>
      <button className="text-lg font-bold bg-pink-600 hover:bg-pink-700 rounded-full px-4 py-2">
        Sign in
      </button>
    </header>
  );
}
