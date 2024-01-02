import React, { ReactNode } from "react";
import { Star } from "react-feather";

export default function StarRating({
  readOnly,
  value,
  empty,
  full,
}: {
  readOnly?: boolean;
  value: number;
  empty: ReactNode;
  full: ReactNode;
}) {
  const stars = [];
  for (let i = 0; i < 10; i++) {
    stars.push(i < value ? full : empty);
  }
  return <div className="flex">{stars}</div>;
}
