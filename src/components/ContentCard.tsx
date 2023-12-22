import React from "react";
import Image from "next/image";

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
    <div
      className={
        "inline-block bg-zinc-800 mr-4 last:mr-0 relative w-40 h-60 rounded-lg p-1 cursor-pointer hover:shadow-xl " +
        className
      }
    >
      <div className="absolute inset-1 bottom-12">
        <Image
          src={image}
          alt={"Content card"}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <span className="absolute bottom-0 font-black text-3xl">
        #{index + 1}
      </span>
    </div>
  );
}
