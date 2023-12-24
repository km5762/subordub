import React, { useEffect } from "react";
import { Suggestion } from "@/components/SearchBar";
import Image from "next/image";

export default function Page({ searchParams }: { searchParams: Suggestion }) {
  return (
    <main className="px-2 pb-16">
      <h2 className="font-black text-3xl mt-12">{searchParams.title}</h2>
      <Image src={searchParams.image} alt="" width={200} height={200} />
    </main>
  );
}
