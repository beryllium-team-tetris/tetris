import { useState, useEffect } from 'react';
import { createGameGrid } from '../utils/gameUtils';

export const useGrid = (player, resetPlayer) => {
  const [grid, setGrid] = useState(createGameGrid());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);

    const sweepRows = newGrid => 
      newGrid.reduce((ack, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsCleared(prev => prev + 1);
          ack.unshift(new Array(newGrid[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);
        return ack;

      }, []);

    const updateGrid = (prevGrid) => {
      const newGrid = prevGrid.map((row) =>
        row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newGrid[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });
      // Check if we collided: reset the player
      if (player.collided) {
        resetPlayer();
        return sweepRows(newGrid);
      }

      return newGrid;
    };

    setGrid((prev) => updateGrid(prev));
  }, [player, resetPlayer]);

  return [grid, setGrid, rowsCleared];
};
