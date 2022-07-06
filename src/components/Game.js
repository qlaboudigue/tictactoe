import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

function Game({ onGameOver }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const x0 = xIsNext ? "X" : "0";

  // Handle box click
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const boxes = [...current];
    // Return if won or occupied
    if (winner || boxes[i]) return;
    // Set box
    boxes[i] = x0;
    setHistory([...historyPoint, boxes]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
    // Trigger onGameOver
    if (calculateWinner(boxes) != null) {
      onGameOver(xIsNext);
    }
  };

  // Reload current game (empty board)
  const reloadGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };

  // Display current game information
  const displayInfo = () => {
    if ((stepNumber == 9) && (!winner)) {
      return <h3>Match nul</h3>
    } else if (winner) {
      return <h3>{"Winner: " + winner} </h3>
    } else {
      return <h3>{"Next Player: " + x0}</h3>
    }
  }

  // Render
  return (
    <div>
      <h1> Tic tac toe Game with React</h1>
      <Board boxes={history[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
          {displayInfo()}
        <button className="reload-button" onClick={reloadGame}> New game </button>
      </div>
    </div>
  );
}

export default Game;
