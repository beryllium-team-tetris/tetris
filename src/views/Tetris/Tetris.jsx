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

export default function Tetris() {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [player] = usePlayer();
  const [grid, setGrid] = useGrid(player);

  return (
    <>
      <StyledTetrisWrapper>
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
            <StartButton />
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </>
  );
}
