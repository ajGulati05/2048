import React, { useState } from 'react';
import './Game.css';
const Game = () => {
  // Initialize board state
  const [board, setBoard] = useState(Array(4).fill(null).map(() => Array(4).fill(0)));

  // Game Logic goes here
  
  return (
    <div className="game">
      {board.map((row, i) => (
        <div key={i} className="row">
          {row.map((cell, j) => (
            <div key={j} className="cell">
              {cell !== 0 ? cell : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Game;
