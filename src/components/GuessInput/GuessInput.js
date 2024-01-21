import React from "react";

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addGuess(guess);
    setGuess("");
  };

  const handleGuessInputChange = (e) => setGuess(e.target.value.toUpperCase());

  const handleInvalidGuess = (e) => {
    e.target.setCustomValidity("Please enter a 5 letter word");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={handleGuessInputChange}
        onInvalid={handleInvalidGuess}
        id="guess-input"
        type="text"
        disabled={disabled}
        required={true}
        pattern=".{5,5}"
      />
    </form>
  );
}

export default GuessInput;
