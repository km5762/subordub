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
    <div className="inline-block mr-4 last:mr-0">
      <Link href={"/"}>
        <div className="relative px-6">
          <div className="absolute w-full h-5/6 box-border top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-zinc-700 border-solid border overflow-hidden">
            <Image
              src={image}
              alt="sd"
              fill
              className="object-cover brightness-50"
            />
            <div className="relative bg-zinc-800/90"></div>
          </div>
          <div className="relative w-40 h-52">
            <Image
              src={image}
              alt="sd"
              fill
              className="object-cover blur"
              quality={100}
            />
            <Image
              src={image}
              alt="sd"
              fill
              className={"object-cover " + className}
              quality={100}
            />
          </div>
        </div>
      </Link>
      <p className="text-wrap whitespace-normal text-ellipsis overflow-hidden ... max-w-full text-center">
        Jujutsu Kaisen
      </p>
    </div>
  );
}
