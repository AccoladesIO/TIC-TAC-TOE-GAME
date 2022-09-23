import React from 'react'
import './score.css'

const Score = ({value}) => {
  return (
    <div className='scoreTab'>Winner: {value}</div>
  )
}

export default Score