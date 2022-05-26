export const GRID_WIDTH = 12;
export const GRID_HEIGHT = 20;

export function createGameGrid() {
  const GridArray = Array.from(Array(GRID_HEIGHT), () =>
    new Array(GRID_WIDTH).fill([0, 'clear'])
  );
  return GridArray;
}
