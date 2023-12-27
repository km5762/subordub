import React, { useEffect } from "react";
import { Suggestion } from "@/components/SearchBar";
import Image from "next/image";

export default function Page({ searchParams }: { searchParams: Suggestion }) {
  return (
    <main className="px-2 pb-16">
      <h2 className="font-black text-4  xl mt-12 mb-12">
        {searchParams.title}
      </h2>
      <div className="relative">
        <div className="relative h-80 overflow-hidden rounded-xl border-zinc-700 border-solid border">
          <Image
            src={searchParams.image}
            alt={`${searchParams.title} poster`}
            fill
            className="object-cover blur -z-20"
          />
          <div className="w-full h-full bg-zinc-800/60 shadow-inner absolute -z-20"></div>
        </div>
        <Image
          src={searchParams.image}
          alt={`${searchParams.title} poster`}
          width={300}
          height={200}
          className="absolute inset-0 m-auto"
        />
        <Image
          src={searchParams.image}
          alt={`${searchParams.title} poster`}
          width={300}
          height={200}
          className="absolute inset-0 m-auto blur-md -z-10"
        />
      </div>
      <section className="mt-12 rounded-xl w-full border-solid border-zinc-700 border">
        <h2 className="font-black text-3xl mt-12">Synposis</h2>
      </section>
    </main>
  );
}
