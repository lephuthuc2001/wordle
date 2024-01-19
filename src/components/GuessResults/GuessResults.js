import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <Guess key={i} guess={guesses[i]} />
      ))}
    </div>
  );
}

export default GuessResults;
