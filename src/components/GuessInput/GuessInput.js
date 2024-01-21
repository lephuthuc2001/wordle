import React from "react";

function GuessInput({ addGuess, disabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const validateGuess = (event) => {
    // Check if the guess is valid.
    const isGuessValid = event.target.validity.patternMismatch === false;

    if (isGuessValid) {
      // If the guess is valid, we'll clear the custom error message.
      event.target.setCustomValidity("");
    } else {
      event.target.setCustomValidity("Enter 5 letters");
    }

    // Check the validity of the input field.
    event.target.reportValidity();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addGuess(tentativeGuess);
    setTentativeGuess("");
  };

  const handleGuessInputChange = (e) => {
    setTentativeGuess(e.target.value.toUpperCase());

    // Validate the guess for every change.
    validateGuess(e);
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required={true}
        pattern={".{5}"}
        value={tentativeGuess}
        placeholder={"Enter 5 letters"}
        onChange={handleGuessInputChange}
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
