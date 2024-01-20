import React from "react";

import { generateRandomID, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner";
// Pick a random word on every pageload.
export const ANSWER = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ ANSWER });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGameWon, setIsGameWon] = React.useState(false);
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

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
    setIsGameWon(guess === answer);
  };

  console.log(answer);
  const resetGame = () => {
    setGuesses([]);
    setIsGameWon(false);
    setAnswer(sample(WORDS));
  };
  return (
    <>
      {" "}
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput disabled={isGameEnded} addGuess={addGuess} />
      {isGameEnded && (
        <GameOverBanner
          isGameWon={isGameWon}
          answer={answer}
          guessCount={guesses.length}
          resetGame={resetGame}
        />
      )}
    </>
  );
}

export default Game;
