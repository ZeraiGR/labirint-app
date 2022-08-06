import { ICell } from '../interfaces/core.interfaces';
import { X_RANGE, Y_RANGE } from './gamePositions';
import { getRandomNumber } from './randomizer';

export const generatestartCell = (): ICell => {
  return {
    x: X_RANGE[getRandomNumber(0, 2)],
    y: Y_RANGE[getRandomNumber(0, 2)],
  } as ICell;
};
