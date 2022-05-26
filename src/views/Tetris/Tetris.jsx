import React from 'react';
import GameGrid from '../../components/GameGrid/GameGrid';
import { createGameGrid } from '../../utils/gameUtils';
export default function Tetris() {
  return (
    <>
      <h1>Tetris</h1>
      <GameGrid grid={createGameGrid()} />
    </>
  );
}
