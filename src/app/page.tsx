import ContentCard from "@/components/ContentCard";
import Image from "next/image";
import banner from "/public/banner.jpeg";
import { Search, ArrowRight } from "react-feather";

export default function Home() {
  const images = Array.from(
    { length: 10 },
    (_, index) =>
      `https://assets.teenvogue.com/photos/615327f812eb503af0cde8b3/1:1/w_3132,h_3132,c_limit/SquidGame_Unit_104_1570.jpg`
  );

  return (
    <main className="px-2 pb-16">
      <div className="relative h-48">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 rounded-b-3xl z-10"></div>
        <Image
          src={banner}
          alt="Banner"
          placeholder="blur"
          priority
          fill
          className="object-cover object-bottom rounded-b-3xl"
        />
        <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold drop-shadow-lg z-20">
          Find the best way to watch!
        </h2>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-10 translate-y-1/2 ">
          <Search className="absolute z-20 top-1/2 -translate-y-1/2 text-zinc-500 ml-1" />
          <input
            type="search"
            className="rounded-full text-black p-2 pl-8 pr-10"
          />
          <button className="absolute z-20 top-1/2 -translate-y-1/2 right-0 mr-1 ml-1 bg-pink-600 rounded-full py-1 px-2">
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>
      <section className="mt-12">
        <div>
          <h2 className="font-bold text-xl mb-2">
            Top shows <span className="text-orange-600 font-black">subbed</span>
          </h2>
          <div className="whitespace-nowrap overflow-x-scroll">
            {images.map((image, index) => (
              <ContentCard image={image} key={index} index={index} />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-2">
            Top shows <span className="text-purple-600 font-black">dubbed</span>
          </h2>
          <div className="whitespace-nowrap overflow-x-scroll">
            {images.map((image, index) => (
              <ContentCard image={image} key={index} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
