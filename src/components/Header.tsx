import React from "react";

export default function Header() {
  return (
    <header className="bg-zinc-800 p-6 flex justify-between items-center">
      <h1 className="font-black text-2xl">
        Sub <span className="text-pink-600">|</span> Dub
      </h1>
      <button className="text-lg font-bold bg-pink-600 hover:bg-pink-700 rounded-full px-4 py-2">
        Sign in
      </button>
    </header>
  );
}
