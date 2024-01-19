import React from "react";

import { generateRandomID, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner"; // Pick a random word on every pageload.

// Pick a random word on every pageload.
export const ANSWER = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ ANSWER });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGameWon, setIsGameWon] = React.useState(false);

  const isGameEnded =
    isGameWon || (guesses.length >= NUM_OF_GUESSES_ALLOWED && !isGameWon);
  const addGuess = (guess) => {
    // Add the guess to the guesses array.
    const newGuess = {
      title: guess,
      // Generate a random ID used as React Key
      id: generateRandomID(),
    };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    // Check if the guess is correct.
    setIsGameWon(guess === ANSWER);
  };
  return (
    <>
      {" "}
      <GuessResults guesses={guesses} />
      <GuessInput disabled={isGameEnded} addGuess={addGuess} />
      {isGameEnded && (
        <Banner isGameWon={isGameWon} guessCount={guesses.length} />
      )}
    </>
  );
}

export default Game;
