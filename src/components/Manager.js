import React, { useState } from "react";
import Game from "./Game";
import IaGame from "./IaGame";
import Switch from "react-switch";


function Manager() {
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [gamesNumber, setGamesNumber] = useState(0);
  const [mode, setMode] = useState(false);

  // Check if game is over
  const onGameOver = (xWon) => {
    if (xWon) {
      setScoreX(scoreX + 1);
    } else {
      setScoreO(scoreO + 1);
    }
  };

  // Increment game counter
  const incrementGame = () => {
    setGamesNumber(gamesNumber + 1);
  };

  // Toogle switch
  const toogleSwitch = () => {
    setMode(!mode);
  }

  // Switch game mode
  const renderGameMode = () => {
    if (!mode) {
      return <Game onGameOver={onGameOver} incrementGame={incrementGame} />;
    } else {
      return <IaGame onGameOver={onGameOver} incrementGame={incrementGame} />;
    }
  }

  // Render
  return (
    <div>
      <h1> Tic tac toe Game with React</h1>
      <h2 className="mode">{mode ? "VS IA" : "1 VS 1"}</h2>
      <Switch onChange={toogleSwitch} checked={mode} />
      {renderGameMode()}
      <h3>Player X : {scoreX}</h3>
      <h3>Player O : {scoreO}</h3>
      <h3>Games played : {gamesNumber}</h3>
    </div>
  );
}

export default Manager;
