import React, { useState } from 'react';
import GameGrid from '../../components/GameGrid/GameGrid';
import Display from '../../components/Display/Display';
import StartButton from '../../components/StartButton/StartButton';
import { usePlayer } from '../../hooks/usePlayer';
import { useGrid } from '../../hooks/useGrid';
import {
  StyledTetrisWrapper,
  StyledTetris,
} from '../../components/Styles/StyledTetris';
import { createGameGrid } from '../../utils/gameUtils';

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPosition, resetPlayer] = usePlayer();
  const [grid, setGrid] = useGrid(player);

  const movePlayer = direction => {
    updatePlayerPosition({ x: direction, y: 0 });
  }

  const startGame = () => {
    setGrid(createGameGrid());
    resetPlayer();
  }

  const drop = () => {
    updatePlayerPosition({ x: 0, y: 1, collided: false })
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if(keyCode === 37) {
        movePlayer(-1);
      } else if(keyCode === 39) {
        movePlayer(1)
      } else if(keyCode === 40) {
        dropPlayer();
      }
    }
  }

  return (
    <>
      <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
        <h1>Tetris</h1>
        <StyledTetris>
          <GameGrid grid={grid} />
          <aside>
            {gameOver ? (
              <Display gameOver={gameOver} text="Game Over!" />
            ) : (
              <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
              </div>
            )}
            <StartButton callback={startGame} />
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </>
  );
}
