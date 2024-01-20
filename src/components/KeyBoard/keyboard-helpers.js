import { GUESS_STATUSES } from "../../constants";

export function generateGuessStatusMap(guesses) {
  const guessStatusMap = new Map();

  guesses.forEach((guess) => {
    guess.guessCheckResult.forEach((character) => {
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
