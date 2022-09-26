import React from 'react'
import './score.css'

const Score = ({value}) => {
    const scoreTab = value === "X"? "x" : "o"
  return (
    <div className="scoreTab" >Winner: <p className={scoreTab}>{value}</p></div>
  )
}

export default Score