import React from "react";
import './App.css'
import { useState } from "react";
import Board from "./components/board/board";
import Score from "./components/score/score";
import Reset from "./components/reset/reset";


function App() {
  const winnerMark = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
  ]
  const defaultValue = Array(9).fill(null);
  const [board, SetBoard] = useState(defaultValue)
  const [xPlaying, setXPlaying] = useState(true)
  const [winner, setWinner] = useState("")
  const [gameOver, setGameOver] = useState(false)
  const handleBox = (Boxidx) => {
    const updateBox = board.map((value, idx) => {
      if (idx === Boxidx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    })
    const playerWon = checkWinner(updateBox)

    if(playerWon){
      if(playerWon === 'X'){
        setWinner("X")
      }else{
        setWinner("O")
      }
    }

    SetBoard(updateBox)
    setXPlaying(!xPlaying)
  }
  const checkWinner = (board) => {
      for (let i = 0; i < winnerMark.length; i++) {
        const [x, y, z] = winnerMark[i]
         
        if (board[x] && board[x] === board[y] && board[x] === board[z]) {
          setGameOver(true)
          console.log(board[x])
          return board[x]
        }       
      }

  }
  const resetGame = () =>{
    SetBoard(defaultValue)
    setWinner("")
    setGameOver(false)
  }
  
  return (
    <div className="App">
      <Score value ={winner}/> 
      <Board board={board} onClick={gameOver? resetGame : handleBox}/>
      <Reset onClick={() => resetGame()}/>
    </div>
  );
}

export default App;
