import React from "react";

// function Banner({ isGameWon, guessCount, answer, resetGame }) {
//   const bannerClassName = isGameWon ? "happy banner" : "sad banner";
//   const bannerContent = isGameWon ? (
//     <p>
//       <strong>Congratulations!</strong> Got it in{" "}
//       <strong>
//         {guessCount} {guessCount > 1 ? "guesses" : "guess"}
//       </strong>
//       .
//     </p>
//   ) : (
//     <p>
//       Sorry, the correct answer is <strong>{answer}</strong>.
//     </p>
//   );
//
//   const resetButton = (
//     <button type="reset" onClick={resetGame}>
//       Reset
//     </button>
//   );
//
//   return (
//     <div className={bannerClassName}>
//       {resetButton}
//       {bannerContent}
//     </div>
//   );
// }

function Banner({ status, children }) {
  return <div className={`banner ${status}`}>{children}</div>;
}

export default Banner;
