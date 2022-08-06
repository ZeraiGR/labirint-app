import { getNeighbours } from './getNeighbour';
import { X_RANGE, Y_RANGE } from './gamePositions';
import { getRandomNumber } from './randomizer';
import { ICell, Direction } from '../interfaces/core.interfaces';

export const updatePosition = (currentCell: ICell): [ICell, Direction] => {
  const xAvailableRange = getNeighbours(currentCell.x, X_RANGE),
    yAvailableRange = getNeighbours(currentCell.y, Y_RANGE),
    direction = getRandomNumber(0, 1);

  let updatedPosition = currentCell,
    route = Direction.None;

  const assignNewPosition = (range: string[], dir: 'x' | 'y'): [ICell, Direction] => {
    const updValue = range.length > 1 ? range[getRandomNumber(0, 1)] : range[0];
    let dirName = Direction.None;
    let pos = null;

    if (dir === 'x') {
      dirName = updValue > currentCell.x ? Direction.Right : Direction.Left;

      pos = {
        x: updValue,
        y: currentCell.y,
      } as ICell;
    } else {
      dirName = updValue > currentCell.y ? Direction.Down : Direction.Up;

      pos = {
        x: currentCell.x,
        y: updValue,
      } as ICell;
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
