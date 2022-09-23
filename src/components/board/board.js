import React from "react";
import Box from "../box/box";
import "./board.css";

const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
        return (
          <div>
            <Box value={value} onClick={() => value == null && onClick(idx)} key={idx}/>
          </div>
        );
    })}

    </div>
  );
};

export default Board;
