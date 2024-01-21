import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Cell({ letter = "", status = "" }) {
  const cellClassName = `cell ${status}`;
  return <span className={cellClassName}>{letter}</span>;
}

const generateCells = (guess, answer) => {
  if (typeof guess !== "undefined") {
    const guessCheckResult = checkGuess(guess.value, answer);

    return guessCheckResult.map((letter, i) => (
      <Cell key={i} letter={letter.letter} status={letter.status} />
    ));
  }

  return range(5).map((num) => <Cell key={num} />);
};

function Guess({ guess, answer }) {
  const cells = generateCells(guess, answer);
  return <p className="guess">{cells}</p>;
}

export default Guess;
