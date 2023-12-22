import React from "react";
import { GitHub } from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 p-2 text-center text-sm font-thin">
      Made by
      <a
        href="https://github.com/km5762"
        className="font-normal hover:underline"
      >
        <GitHub className="inline ml-2 mr-1" size={15} />
        km5762
      </a>
    </footer>
  );
}
