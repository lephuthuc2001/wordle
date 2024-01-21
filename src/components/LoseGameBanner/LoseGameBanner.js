import React from "react";
import Banner from "../Banner";

function LoseGameBanner({ answer, resetButton }) {
  return (
    <Banner status="sad">
      {resetButton}
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LoseGameBanner;
