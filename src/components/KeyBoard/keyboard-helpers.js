import { GUESS_STATUSES } from "../../constants";
import { checkGuess } from "../../game-helpers";

export function generateGuessStatusMap(guesses, answer) {
  const guessStatusMap = new Map();

  guesses.forEach((guess) => {
    const guessCheckResult = checkGuess(guess.value, answer);
    guessCheckResult.forEach((character) => {
      const existingStatus = guessStatusMap.get(character.letter);
      const newStatus = character.status;

      // Update the status based on priority: CORRECT > MISPLACED & INCORRECT
      if (!existingStatus || newStatus === GUESS_STATUSES.CORRECT) {
        guessStatusMap.set(character.letter, character.status);
      }
    });
  });

  return guessStatusMap;
}
