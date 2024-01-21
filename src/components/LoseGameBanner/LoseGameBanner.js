import React from "react";
import Banner from "../Banner";

function LoseGameBanner({ answer, action, actionText }) {
  return (
    <Banner action={action} actionText={actionText} status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default LoseGameBanner;
