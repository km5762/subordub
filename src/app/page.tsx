import ContentCard from "@/components/ContentCard";
import Image from "next/image";
import banner from "/public/banner.jpeg";
import { Search, ArrowRight } from "react-feather";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const images = Array.from(
    { length: 10 },
    (_, index) =>
      "https://cdn.vox-cdn.com/thumbor/OaLG8uG4V8Kgb4mKomOktrUgDD0=/0x50:1600x850/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/24762952/Jujutsu_Kaisen_season_2_01.jpg"
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
        <SearchBar className="absolute left-1/2 transform -translate-x-1/2 bottom-0 z-10 translate-y-1/2 " />
      </div>
      <section className="mt-12">
        <div>
          <h2 className="font-bold text-xl mb-2">
            Top shows <span className="text-orange-600 font-black">subbed</span>
          </h2>
          <div className="whitespace-nowrap overflow-x-scroll p-2">
            {images.map((image, index) => (
              <ContentCard
                image={image}
                key={index}
                index={index}
                className="hover:shadow-orange-600"
              />
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-2">
            Top shows <span className="text-purple-600 font-black">dubbed</span>
          </h2>
          <div className="whitespace-nowrap overflow-x-scroll p-2">
            {images.map((image, index) => (
              <ContentCard
                image={image}
                key={index}
                index={index}
                className="hover:shadow-purple-600"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
