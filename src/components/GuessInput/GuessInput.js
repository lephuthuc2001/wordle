import React from "react";

function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addGuess(guess);
    setGuess("");
  };

  const handleGuessInputChange = (e) => setGuess(e.target.value.toUpperCase());
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        value={guess}
        onChange={handleGuessInputChange}
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
