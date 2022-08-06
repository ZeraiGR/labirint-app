import { getNeighbours } from './getNeighbour';
import { X_RANGE, Y_RANGE } from './gamePositions';
import { Cell } from '../store/game/gameSlice';
import { getRandomNumber } from './randomizer';

export const updatePosition = (currentPosition: Cell): [Cell, string] => {
  const xAvailableRange = getNeighbours(currentPosition.x, X_RANGE),
    yAvailableRange = getNeighbours(currentPosition.y, Y_RANGE),
    direction = getRandomNumber(0, 1);

  let updatedPosition = currentPosition,
    route = 'none';

  const assignNewPosition = (range: string[], dir: 'x' | 'y'): [Cell, string] => {
    const updValue = range.length > 1 ? range[getRandomNumber(0, 1)] : range[0];
    let dirName = '';
    let pos = null;

    if (dir === 'x') {
      dirName = updValue > currentPosition.x ? 'right' : 'left';

      pos = {
        x: updValue,
        y: currentPosition.y,
      } as Cell;
    } else {
      dirName = updValue > currentPosition.y ? 'bottom' : 'top';

      pos = {
        x: currentPosition.x,
        y: updValue,
      } as Cell;
    }

    return [pos, dirName];
  };

  // x - 0, y - 1
  if (direction === 0) {
    const [pos, dirName] = assignNewPosition(xAvailableRange, 'x');
    updatedPosition = pos;
    route = dirName;
  } else {
    const [pos, dirName] = assignNewPosition(yAvailableRange, 'y');
    updatedPosition = pos;
    route = dirName;
  }

  return [updatedPosition, route];
};
