import { X_RANGE, Y_RANGE } from './gamePositions';
import { Cell } from '../store/game/gameSlice';
import { getRandomNumber } from './randomizer';

export const generateStartPosition = (): Cell => {
  return {
    x: X_RANGE[getRandomNumber(0, 2)],
    y: Y_RANGE[getRandomNumber(0, 2)],
  } as Cell;
};
