import React from "react";
import Container from "./Container";
import Image from "next/image";
import { Star, ThumbsUp, ThumbsDown } from "react-feather";
import StarRating from "./StarRating";
export default function ReviewCard({ rating }: { rating: number }) {
  return (
    <Container>
      <div className="flex items-center flex-wrap">
        <Image
          src="https://static.thenounproject.com/png/4035892-200.png"
          alt="Profile picture"
          width={75}
          height={75}
        />
        <div>
          <p>Dawgrat</p>
          <StarRating rating={rating} fullClassName="fill-white" readOnly />
          <p className="font-black text-orange-600">SUB</p>
        </div>
        <div className="mx-3 mt-2">
          <h3 className="font-bold text-lg">Was Ass</h3>
          <p className="text-ellipsis overflow-hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tincidunt rutrum ligula, id fermentum risus feugiat vulputate. Fusce
            vitae mauris quis ligula mattis lobortis. Praesent faucibus sagittis
            urna, et ultrices nibh mollis sit amet. Pellentesque quis egestas
            quam. Proin enim ligula, venenatis nec convallis et, lacinia eu
            nibh. Nulla vitae mi eu tortor mattis feugiat a id ante. Vivamus eu
            nisi nisi. Sed id venenatis ipsum, at hendrerit quam. Duis id auctor
            lacus. Proin mattis volutpat ipsum, a imperdiet tortor. Cras orci
            enim, pellentesque vel felis sed, tincidunt venenatis neque. Integer
            luctus elementum mi, quis pellentesque metus tincidunt id. Nulla
            molestie, turpis eu efficitur sollicitudin, ligula lectus congue
            est, vel euismod dui massa et lorem. Vestibulum non massa lorem.
            Nulla facilisi. Donec et gravida orci, sed iaculis dolor.
          </p>
          <div className="flex gap-8 mt-4 justify-end">
            <div>
              <button>
                <ThumbsUp className="scale-125 inline-block mr-4" />
              </button>
              <span>12</span>
            </div>
            <div>
              <button>
                <ThumbsDown className="scale-125 inline-block mr-4" />
              </button>
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
