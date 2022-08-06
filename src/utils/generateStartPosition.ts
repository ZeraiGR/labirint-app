import { Cell } from '../store/game/gameSlice';
import { getRandomNumber } from './randomizer';

export const generateStartPosition = (): Cell => {
  const xRange: string[] = ['1', '2', '3'];
  const yRange: string[] = ['A', 'B', 'C'];

  return {
    x: xRange[getRandomNumber(0, 2)],
    y: yRange[getRandomNumber(0, 2)],
  } as Cell;
};
