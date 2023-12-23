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
    <div className="inline-block mr-4 last:mr-0 w-40">
      <Link
        href={"/shows/1"}
        className={
          "inline-block bg-zinc-800/60 w-full relative h-60 rounded-lg border-solid border-zinc-700 border p-1 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out " +
          className
        }
      >
        <Image
          src={image}
          alt={"Content card"}
          fill
          className="object-cover rounded-lg -z-10 bg-white blur-sm"
        />
        <div className="absolute inset-1">
          <h2
            className="absolute z-10 text-zinc-800/90 text-5xl font-black"
            style={{
              textShadow: "0px 0px 5px rgba(255, 255, 255, 0.8)",
            }}
          >
            #1
          </h2>
          <Image
            src={image}
            alt={"Content card"}
            fill
            className="object-cover rounded-lg border-zinc-700 border-solid border"
          />
        </div>
      </Link>
      <p className="text-wrap whitespace-normal text-ellipsis overflow-hidden ... max-w-full text-center">
        Jujutsu Kaisen
      </p>
    </div>
  );
}
