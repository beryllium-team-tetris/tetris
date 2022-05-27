import { useState, useEffect } from 'react';
import { createGameGrid } from '../utils/gameUtils';

export const useGrid = (player, resetPlayer) => {
  const [grid, setGrid] = useState(createGameGrid());

  useEffect(() => {
    const updateGrid = prevGrid => {
      const newGrid = prevGrid.map(row => 
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
        );

        player.tetromino.forEach((row, y) => {
          row.forEach((value, x) => {
            if(value !== 0) {
              newGrid[y + player.pos.y][x + player.pos.x] = [
                value, 
                `${player.collided ? 'merged' : 'clear'}`,
              ];
            }
          });
        });

        return newGrid;
    };

    setGrid(prev => updateGrid(prev))
  }, [player]);

  return [grid, setGrid];
};
