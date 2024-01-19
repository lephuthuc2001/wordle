import React from "react";

import { generateRandomID, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    const newGuess = {
      title: guess,
      // Generate a random ID to use as the key for React.
      id: generateRandomID(),
    };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  };
  return (
    <>
      {" "}
      <GuessResults guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
