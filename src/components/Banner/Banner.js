import React from "react";
import { ANSWER } from "../Game";

function Banner({ isGameWon, guessCount }) {
  const bannerClassName = isGameWon ? "happy banner" : "sad banner";
  const bannerContent = isGameWon ? (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{guessCount} guesses</strong>.
    </p>
  ) : (
    <p>
      Sorry, the correct answer is <strong>{ANSWER}</strong>.
    </p>
  );

  return <div className={bannerClassName}>{bannerContent}</div>;
}

export default Banner;
