import React from "react";
import Banner from "../Banner";

function WinGameBanner({ guessCount, resetButton }) {
  return (
    <Banner status="happy">
      {resetButton}
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessCount} {guessCount > 1 ? "guesses" : "guess"}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WinGameBanner;
