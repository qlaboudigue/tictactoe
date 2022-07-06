import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

function IaGame({ onGameOver, incrementGame }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";
  const [countTurns, setCountTurns] = useState(0);

  // Handle box click
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const boxes = [...current];
    // Return if won or occupied
    if (winner || boxes[i]) return;
    // Set box
    boxes[i] = "X";
    console.log(countTurns);
    setHistory([...historyPoint, boxes]);
    setStepNumber(historyPoint.length);
    setCountTurns(countTurns+2);
    // Trigger onGameOver
    if (calculateWinner(boxes) != null) {
      onGameOver(true);
      return;
    }
    // Trigger IA
    const emptySlots = [];
    for (let j = 0; j < boxes.length; j++) {
      if (boxes[j] == null) {
        emptySlots.push(j);
      }
    }
    var randBox = emptySlots[Math.floor(Math.random() * emptySlots.length)];
    boxes[randBox] = "O";

    // Trigger onGameOver
    if (calculateWinner(boxes) != null) {
      onGameOver(false);
    }
  };

  // Reload current game (empty board)
  const reloadGame = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
    incrementGame();
    setCountTurns(0);
  };

  // Display current game information
  const displayInfo = () => {
    if (countTurns == 10 && !winner) {
      return <h3>Well, it's a tie!</h3>;
    } else if (winner) {
      return <h3>{"Winner: " + winner} </h3>;
    } else {
      return <h3>{"Next Player: " + xO}</h3>;
    }
  };

  // Render
  return (
    <div>
      <Board
        boxes={history[stepNumber]}
        onClick={handleClick}
        style="iaBoard"
      />
      <div className="info-wrapper">
        {displayInfo()}
        <button className="reload-button" onClick={reloadGame}>
          {" "}
          New game{" "}
        </button>
      </div>
    </div>
  );
}

export default IaGame;
