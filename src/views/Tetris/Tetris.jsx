import React, { useEffect, useState } from 'react';
import GameGrid from '../../components/GameGrid/GameGrid';
import Display from '../../components/Display/Display';
import StartButton from '../../components/StartButton/StartButton';

import {
  StyledTetrisWrapper,
  StyledTetris,
} from '../../components/Styles/StyledTetris';

import {
  createGameGrid,
  checkCollision,
  getDropTime,
} from '../../utils/gameUtils';

// Custom hooks
import { useGrid } from '../../hooks/useGrid';
import { usePlayer } from '../../hooks/usePlayer';
import useInterval from '../../hooks/useInterval';
import { useGameStatus } from '../../hooks/useGameStatus';
import { insertScore } from '../../services/scores';
import { useAuth } from '../../hooks/user';

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player, updatePlayerPosition, resetPlayer, playerRotate] = usePlayer();
  const [grid, setGrid, rowsCleared] = useGrid(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] =
    useGameStatus(rowsCleared);
  const [error, setError] = useState('');

  const { user, profileID } = useAuth();

  const movePlayer = (direction) => {
    if (!checkCollision(player, grid, { x: direction, y: 0 })) {
      updatePlayerPosition({ x: direction, y: 0 });
    }
  };

  const startGame = () => {
    setGrid(createGameGrid());
    setDropTime(1000);
    resetPlayer();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(1);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows >= level * 10) {
      setLevel((prev) => prev + 1);
      // Also increase speed
      setDropTime(getDropTime(level));
    }
    if (!checkCollision(player, grid, { x: 0, y: 1 })) {
      updatePlayerPosition({ x: 0, y: 1, collided: false });
    } else {
      if (player.pos.y < 1) {
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPosition({ x: 0, y: 0, collided: true });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 40 || keyCode === 83) {
        setDropTime(getDropTime(level));
      }
    }
  };

  const dropPlayer = () => {
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
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

  useInterval(() => {
    drop();
  }, dropTime);

  useEffect(() => {
    if (gameOver) {
      const updateScore = async () => {
        try {
          await insertScore({ score, profile_id: profileID, user_id: user.id });
        } catch (error) {
          setError(error.message);
        }
      };
      updateScore();
    }
  }, [gameOver]);

  return (
    <>
      <StyledTetrisWrapper
        role="button"
        tabIndex="0"
        onKeyDown={(e) => move(e)}
        onKeyUp={keyUp}
      >
        <h1>Tetris</h1>
        {error && <p>{error}</p>}
        <StyledTetris>
          <GameGrid grid={grid} />
          <aside>
            {gameOver ? (
              <>
                <Display gameOver={gameOver} text="Game Over!" />
                <Display text={`Score: ${score}`} />
              </>
            ) : (
              <div>
                <Display text={`Score: ${score}`} />
                <Display text={`Rows: ${rows}`} />
                <Display text={`Level: ${level}`} />
              </div>
            )}
            <StartButton callback={startGame} />
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </>
  );
}
