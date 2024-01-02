import React from "react";
import Container from "@/components/Container";

export default function AddReviewBox() {
  return (
    <Container>
      <h3>
        Add a review as <b>Dawgrat</b>
      </h3>
      <label>
        Heading
        <input type="text" name="" id="" className="block" />
      </label>
      <label>
        Review
        <textarea className="block" />
      </label>
    </Container>
  );
}
