import React from "react";
import { useQuiz } from "../context/QuizContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const perecentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (perecentage === 100) emoji = "🥇";
  if (perecentage >= 80 && perecentage < 100) emoji = "🎉";
  if (perecentage >= 50 && perecentage < 80) emoji = "😄";
  if (perecentage >= 0 && perecentage < 50) emoji = "🤔";
  if (perecentage === 0) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(perecentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
