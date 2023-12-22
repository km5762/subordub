import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ContentCardProps {
  image: string;
  index: number;
  className: string;
}

export default function ContentCard({
  image,
  index,
  className,
}: ContentCardProps) {
  return (
    <Link
      href={"/shows/1"}
      className={
        "inline-block bg-zinc-800/75 mr-4 last:mr-0 relative w-40 h-60 rounded-lg p-1 cursor-pointer shadow-xl border-zinc-700 border-solid border overflow-hidden hover:shadow-lg transition duration-300 ease-in-out " +
        className
      }
    >
      <Image
        src={image}
        alt={"Content card"}
        fill
        className="object-cover rounded-lg -z-10 bg-white blur-sm"
      />
      <div className="absolute inset-1 bottom-12">
        <Image
          src={image}
          alt={"Content card"}
          fill
          className="object-cover rounded-lg border-zinc-700 border-solid border"
        />
      </div>
      <span className="absolute bottom-0 font-black text-3xl">
        #{index + 1}
      </span>
    </Link>
  );
}
