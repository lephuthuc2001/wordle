export function generateGuessStatusMap(guesses) {
  const guessStatusMap = new Map();

  guesses.forEach((guess) => {
    const guessCheckResult = guess.guessCheckResult;

    guessCheckResult.forEach((character) => {
      guessStatusMap.set(character.letter, character.status);
    });
  });

  return guessStatusMap;
}
