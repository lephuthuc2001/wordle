import React from "react";
import Game from "../Game";
import Header from "../Header";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { generateRandomID } from "../../utils";

function App() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    const newGuess = {
      title: guess,
      id: generateRandomID(),
    };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  };
  return (
    <div className="wrapper">
      <Header />
      <div className="game-wrapper">
        <Game />
        <GuessResults guesses={guesses} />
        <GuessInput addGuess={addGuess} />
      </div>
    </div>
  );
}

export default App;
