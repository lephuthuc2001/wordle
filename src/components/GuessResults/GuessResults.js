import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      <h2>Guesses</h2>
      {guesses.map((guess) => (
        <p key={guess.id} id={guess.id} className="guess">
          {guess.title}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
