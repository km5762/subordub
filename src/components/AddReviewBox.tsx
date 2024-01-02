"use client";

import React, { useState } from "react";
import Container from "@/components/Container";
import StarRating from "./StarRating";
import { Star } from "react-feather";

export default function AddReviewBox() {
  const [rating, setRating] = useState(0);

  return (
    <Container>
      <h3>
        Add a review as <b>Anonymous</b>
      </h3>
      <label>
        Heading
        <input type="text" name="" id="" className="block" />
      </label>
      <label>
        Review
        <textarea className="block" />
      </label>
      <label>
        Rating
        <StarRating
          fullClassName="fill-white"
          rating={rating}
          setRating={setRating}
        />
      </label>
    </Container>
  );
}
