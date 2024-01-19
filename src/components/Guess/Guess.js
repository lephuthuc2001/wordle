import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  const cells = range(5).map((i) => (
    <span key={i} className="cell">
      {guess ? guess.title[i] : ""}
    </span>
  ));

  return <p className="guess">{cells}</p>;
}

export default Guess;
