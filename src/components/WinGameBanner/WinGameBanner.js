import React from "react";
import Banner from "../Banner";

function WinGameBanner({ guessCount, action, actionText }) {
  return (
    <Banner action={action} actionText={actionText} status="happy">
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
