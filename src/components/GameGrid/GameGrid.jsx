import React from 'react';
import Cell from '../Cell/Cell';
import { StyledGrid } from '../Styles/StyledGrid';

export default function GameGrid({ grid }) {
  return (
    <StyledGrid width={grid[0].length} height={grid.length}>
      {grid.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledGrid>
  );
}
