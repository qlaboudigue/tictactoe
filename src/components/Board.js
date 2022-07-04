import React from "react";
import Box from "./Box";

function Board({ boxes, onClick }) {
  return (
    <div className="board">
      {boxes.map((box, i) => (
        <Box key={i} value={box} onClick={() => onClick(i)} />
      ))}
    </div>
  );
}

export default Board;
