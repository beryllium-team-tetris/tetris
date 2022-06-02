import { useCallback, useState } from 'react';
import { checkCollision, GRID_WIDTH } from '../utils/gameUtils';
import { TETROMINOS, randomTetromino } from '../utils/tetrominos';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const rotate = (matrix, direction) => {
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    if (direction > 0) return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };

  const playerRotate = (grid, direction) => {
    const clonedPlayer = JSON.parse(JSON.stringify(player));
    clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction);

    const position = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollision(clonedPlayer, grid, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotate(clonedPlayer.tetromino, -direction);
        clonedPlayer.pos.x = position;
        return;
      }
    }
    setPlayer(clonedPlayer);
  };

  const updatePlayerPosition = ({ x, y, collided }) => {
    setPlayer((prev) => ({
      ...prev,
      pos: { x: prev.pos.x + x, y: prev.pos.y + y },
      collided,
    }));
  };

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: GRID_WIDTH / 2 - 2, y: 0 },
      // tetromino: randomTetromino().shape,
      tetromino: TETROMINOS['I'].shape,
      collided: false,
    });
  }, []);

  return [player, updatePlayerPosition, resetPlayer, playerRotate];
};
