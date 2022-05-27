import { useState } from 'react';
import { createGameGrid } from '../utils/gameUtils';

export const useGrid = () => {
  const [grid, setGrid] = useState(createGameGrid());

  return [grid, setGrid];
};
