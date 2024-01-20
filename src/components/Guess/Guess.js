import React from "react";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const isValidGuess = typeof guess !== "undefined";

  let cells = range(5).map((i) => <span key={i} className="cell"></span>);

  if (isValidGuess) {
    cells = guess.guessCheckResult.map((letter, i) => (
      <span className={`cell ${letter.status}`} key={i}>
        {letter.letter}
      </span>
    ));
  }

  return <p className="guess">{cells}</p>;
}

export default Guess;
