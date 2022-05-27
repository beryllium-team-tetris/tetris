import React from 'react';
import Cell from '../Cell/Cell';

export default function GameGrid({ grid }) {
  return (
    <div>
      {grid.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </div>
  );
}
