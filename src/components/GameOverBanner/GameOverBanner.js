import React from "react";

function GameOverBanner({ isGameWon, guessCount, answer, resetGame }) {
  const bannerClassName = isGameWon ? "happy banner" : "sad banner";
  const bannerContent = isGameWon ? (
    <p>
      <strong>Congratulations!</strong> Got it in
      <strong>{guessCount} guesses</strong>.
    </p>
  ) : (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );

  const resetButton = (
    <button type="reset" onClick={resetGame}>
      Reset
    </button>
  );

  return (
    <div className={bannerClassName}>
      {resetButton}
      {bannerContent}
    </div>
  );
}

export default GameOverBanner;
