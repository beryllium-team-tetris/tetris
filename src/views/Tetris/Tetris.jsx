import React, { useState } from 'react';
import GameGrid from '../../components/GameGrid/GameGrid';
import Display from '../../components/Display/Display';
import StartButton from '../../components/StartButton/StartButton';
import { useGrid } from '../../hooks/useGrid';
import { usePlayer } from '../../hooks/usePlayer';
import {
  StyledTetrisWrapper,
  StyledTetris,
} from '../../components/Styles/StyledTetris';
import { createGameGrid, checkCollision } from '../../utils/gameUtils';

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
  const [grid, setGrid] = useGrid(player, resetPlayer);

  const movePlayer = (direction) => {
    console.log('direction', direction);
    if (!checkCollision(player, grid, { x: direction, y: 0 })) {
      updatePlayerPosition({ x: direction, y: 0 });
    }
  };

  const startGame = () => {
    setGrid(createGameGrid());
    resetPlayer();
    setGameOver(false);
  };

  const drop = () => {
    if (!checkCollision(player, grid, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        console.log('game over');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    drop();
  };

  const move = ({ keyCode }) => {
    console.log('move is called! keycode: ', keyCode);
    if (!gameOver) {
      if (keyCode === 37 || keyCode === 65) {
        movePlayer(-1);
      } else if (keyCode === 39 || keyCode === 68) {
        movePlayer(1);
      } else if (keyCode === 40 || keyCode === 83) {
        dropPlayer();
      } else if (keyCode === 38 || keyCode === 87) {
        playerRotate(grid, 1);
      }
    }
  };

  return (
    <>
      <StyledTetrisWrapper
        role="button"
        tabIndex="0"
        onKeyDown={(e) => move(e)}
      >
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
