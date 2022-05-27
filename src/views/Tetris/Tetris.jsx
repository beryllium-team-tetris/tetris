import React from 'react';
import GameGrid from '../../components/GameGrid/GameGrid';
import { createGameGrid } from '../../utils/gameUtils';
import Display from '../../components/Display/Display';
import StartButton from '../../components/StartButton/StartButton';
import {
  StyledTetrisWrapper,
  StyledTetris,
} from '../../components/Styles/StyledTetris';

export default function Tetris() {
  return (
    <>
      <StyledTetrisWrapper>
        <h1>Tetris</h1>
        <StyledTetris>
          <GameGrid grid={createGameGrid()} />
          <aside>
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>
            <StartButton />
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </>
  );
}
