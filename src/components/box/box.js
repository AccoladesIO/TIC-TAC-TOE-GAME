import React from "react";
import "./box.css";

const Box = ({ value, onClick }) => {
    const fontStyle = value === "X"? "box x" : "box o"
  return (
    <div>
      <button className={fontStyle} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Box;
