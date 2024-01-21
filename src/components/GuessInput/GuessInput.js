import React from "react";

function GuessInput({ addGuess, disabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    addGuess(tentativeGuess);
    setTentativeGuess("");
  };

  const handleGuessInputChange = (e) =>
    setTentativeGuess(e.target.value.toUpperCase());

  const handleInvalidGuess = (e) => {
    e.target.setCustomValidity("Please enter a 5 letter word");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required={true}
        minLength={5}
        maxLength={5}
        value={tentativeGuess}
        onChange={handleGuessInputChange}
        onInvalid={handleInvalidGuess}
        id="guess-input"
        type="text"
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
