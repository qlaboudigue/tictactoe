import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

function Game({ onGameOver }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  // const [gameOver, setGameOver] = useState(false);
  const isGameOver = winner ? true : false;
  console.log(isGameOver);
  const x0 = xIsNext ? "X" : "0";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const boxes = [...current];
    // Return if won or occupied
    if (winner || boxes[i]) return;
    // Select square
    boxes[i] = x0;
    setHistory([...historyPoint, boxes]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  return (
    <div>
      <h1> Tic tac toe Game with React</h1>
      <Board boxes={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <h3>{winner ? "Winner: " + winner : "Next Player: " + x0}</h3>
      </div>
    </div>
  );
}

export default Game;
