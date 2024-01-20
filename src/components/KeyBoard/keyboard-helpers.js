export function generateGuessStatusMap(guesses) {
  const guessStatusMap = new Map();

  guesses.forEach((guess) => {
    const guessCheckResult = guess.guessCheckResult;

    guessCheckResult.forEach((character) => {
      guessStatusMap.set(character.letter, character.status);
    });
  });

  console.log(guessStatusMap.keys());
  console.log(guessStatusMap.values());
  console.log(guessStatusMap.get("L"));
  return guessStatusMap;
}
