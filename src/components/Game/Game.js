import React from "react";

import { generateRandomID, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults";
import GuessInput from "../GuessInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import KeyBoard from "../KeyBoard";
import LoseGameBanner from "../LoseGameBanner";
import WinGameBanner from "../WinGameBanner";
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

  const addGuess = (tentativeGuess) => {
    const newGuess = {
      // Generate a random ID used as React Key
      id: generateRandomID(),
      value: tentativeGuess,
    };

    // Add the guess to the guesses array.
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    // Check if the guess is correct.
    setIsGameWon(tentativeGuess === answer);
  };

  const resetGame = () => {
    setGuesses([]);
    setIsGameWon(false);
    setAnswer(sample(WORDS));
  };

  const gameOverBanner = isGameWon ? (
    <WinGameBanner
      action={resetGame}
      actionText={"Reset"}
      guessCount={guesses.length}
    />
  ) : (
    <LoseGameBanner action={resetGame} actionText={"Reset"} answer={answer} />
  );
  return (
    <>
      {" "}
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput disabled={isGameEnded} addGuess={addGuess} />
      {isGameEnded && gameOverBanner}
      {!isGameEnded && <KeyBoard answer={answer} guesses={guesses} />}
    </>
  );
}

export default Game;
