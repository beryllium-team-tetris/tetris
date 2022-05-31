export const GRID_WIDTH = 12;
export const GRID_HEIGHT = 20;

export function createGameGrid() {
  const GridArray = Array.from(Array(GRID_HEIGHT), () =>
    new Array(GRID_WIDTH).fill([0, 'clear'])
  );
  return GridArray;
}

export const checkCollision = (player, grid, { x: moveX, y: moveY }) => {
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // make sure we're on an tetromino cell
      if (player.tetromino[y][x] !== 0) {
        if (
          // make sure tetromino is in game area's height
          // make sure we don't go through the bottom of the play area
          !grid[y + player.pos.y + moveY] ||
          //  Check that our move is inside the game area's width
          !grid[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // Check that the cell we're moving to isn't clear
          grid[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            'clear'
        ) {
          return true;
        }
      }
    }
  }
  return false;
};
