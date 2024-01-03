"use client";

import React, { ReactNode, useState } from "react";
import { Star } from "react-feather";

export default function StarRating({
  readOnly,
  rating,
  setRating,
  emptyClassName,
  fullClassName,
}:
  | {
      readOnly?: false;
      rating: number;
      setRating: React.Dispatch<number>;
      emptyClassName?: string;
      fullClassName?: string;
    }
  | {
      readOnly: true;
      rating: number;
      setRating?: never;
      emptyClassName?: string;
      fullClassName?: string;
    }) {
  const stars = [];
  rating = rating ?? 0;
  const [hover, setHover] = useState(rating);

  function handleMouseEnter(i: number) {
    if (!readOnly) {
      setHover(i + 1);
    }
  }

  function handleMouseLeave(i: number) {
    if (!readOnly) {
      setHover(rating);
    }
  }

  function handleClick(event: React.MouseEvent, i: number) {
    event.preventDefault();
    if (!readOnly) {
      setRating(i + 1);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (!readOnly) {
      if (event.key === "ArrowRight" && rating < 10) {
        setRating(rating + 1);
      } else if (event.key === "ArrowLeft" && rating > 0) {
        setRating(rating - 1);
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    stars.push(
      i < hover ? (
        <button disabled={readOnly}>
          <Star
            className={fullClassName}
            onMouseEnter={() => handleMouseEnter(i)}
            onClick={(event) => handleClick(event, i)}
            onMouseLeave={() => handleMouseLeave(i)}
          />
        </button>
      ) : (
        <button disabled={readOnly}>
          <Star
            className={emptyClassName}
            onMouseEnter={() => handleMouseEnter(i)}
            onClick={(event) => handleClick(event, i)}
            onMouseLeave={() => handleMouseLeave(i)}
          />
        </button>
      )
    );
  }
  return (
    <div className="flex" onKeyDown={handleKeyDown} tabIndex={0}>
      {stars}
    </div>
  );
}
