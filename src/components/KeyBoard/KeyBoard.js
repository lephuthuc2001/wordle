import React from "react";

import { range } from "../../utils";
import Key from "../Key";
import { ALPHABET_CHARACTERS } from "../../constants";
import { generateGuessStatusMap } from "./keyboard-helpers";

function KeyRow({ rangeStart, rangeEnd, guessStatusMap }) {
  return (
    <div className="keyboard__row">
      {range(rangeStart, rangeEnd).map((i) => {
        const character = ALPHABET_CHARACTERS[i].toUpperCase();
        let status = "unused";

        if (typeof guessStatusMap !== "undefined") {
          const isCharacterGuessed = guessStatusMap.has(character);

          if (isCharacterGuessed) {
            status = guessStatusMap.get(character);
          }
        }

        return (
          <Key status={status} key={character}>
            {character.toUpperCase()}
          </Key>
        );
      })}
    </div>
  );
}

function KeyBoard({ guesses, answer }) {
  const ranges = [
    [0, 9],
    [10, 18],
    [19, 25],
  ];

  const guessStatusMap =
    guesses.length > 0 ? generateGuessStatusMap(guesses, answer) : undefined;

  return (
    <div className="keyboard">
      {ranges.map((range, i) => (
        <KeyRow
          guessStatusMap={guessStatusMap}
          key={i}
          rangeStart={range[0]}
          rangeEnd={range[1]}
        />
      ))}
    </div>
  );
}

export default KeyBoard;
