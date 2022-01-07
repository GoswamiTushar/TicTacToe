import React, { useState, useEffect } from 'react';
import './style.css';
import SquareComponent from './square';

const initialState = ['', '', '', '', '', '', '', '', ''];

function App() {
  const [gameState, updateGameState] = useState(initialState);
  const [isXTurn, updateIsXTurn] = useState(false);

  const updateState = (index) => {
    let strs = Array.from(gameState);
    if (strs[index]) {
      return;
    }
    strs[index] = isXTurn ? 'X' : 'O';
    updateGameState(strs);
    updateIsXTurn(!isXTurn);
  };

  const clearGame = () => {
    updateGameState(initialState);
    console.log('ReSET');
  };

  console.log(gameState);

  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      clearGame();
      alert(`${winner} won!`);
    }
  }, [gameState]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i <= lines.length - 1; i++) {
      console.log(lines[i]);
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }

    return null;
  };

  return (
    <div className="App">
      <div className="board">
        <div className="row">
          <SquareComponent
            content={gameState[0]}
            onClick={() => updateState(0)}
          />

          <SquareComponent
            content={gameState[1]}
            onClick={() => updateState(1)}
          />
          <SquareComponent
            content={gameState[2]}
            onClick={() => updateState(2)}
          />
        </div>
        <div className="row">
          <SquareComponent
            content={gameState[3]}
            onClick={() => updateState(3)}
          />
          <SquareComponent
            content={gameState[4]}
            onClick={() => updateState(4)}
          />
          <SquareComponent
            content={gameState[5]}
            onClick={() => updateState(5)}
          />
        </div>
        <div className="row">
          <SquareComponent
            content={gameState[6]}
            onClick={() => updateState(6)}
          />
          <SquareComponent
            content={gameState[7]}
            onClick={() => updateState(7)}
          />
          <SquareComponent
            content={gameState[8]}
            onClick={() => updateState(8)}
          />
        </div>
        <button onClick={clearGame}>Clear Game</button>
      </div>
    </div>
  );
}

export default App;
