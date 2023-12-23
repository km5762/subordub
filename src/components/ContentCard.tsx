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
        "inline-block mr-4 bg-zinc-800/80 last:mr-0 relative w-48 h-60 rounded-lg p-1 cursor-pointer overflow-hidden hover:shadow-lg transition duration-300 ease-in-out " +
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
      <div className="absolute bottom-0 flex">
        <span className="font-black text-4xl align-middle">#{index + 1}</span>
        <div className="whitespace-normal ml-1">
          <span className="font-bold align-top">One Punch Man</span>
        </div>
      </div>
    </Link>
  );
}
