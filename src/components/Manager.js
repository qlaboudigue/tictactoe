import React, { useState } from "react";
import Game from "./Game";

function Manager() {
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  const onGameOver = (xWon) => {
    if (xWon) {
      setScoreX(scoreX + 1);
    } else {
      setScoreO(scoreO + 1);
    }
  };

  return (
    <div>
      <Game onGameOver={onGameOver} />
      <h3>Joueur X : {scoreX}</h3>
      <h3>Joueur O : {scoreO}</h3>
    </div>
  );
}

export default Manager;
