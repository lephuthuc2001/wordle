import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { ANSWER } from "../../constants";

function Guess({ guess }) {
  const isValidGuess = typeof guess !== "undefined";

  let cells = range(5).map((i) => <span key={i} className="cell"></span>);

  if (isValidGuess) {
    const guessCheckResult = checkGuess(guess.title, ANSWER);

    cells = guessCheckResult.map((letter, i) => (
      <span className={`cell ${letter.status}`} key={i}>
        {letter.letter}
      </span>
    ));
  }

  return <p className="guess">{cells}</p>;
}

export default Guess;
