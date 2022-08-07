import { Direction, ICell, IStep } from '../interfaces/core.interfaces';

export const gameBoard: ICell[] = [
  { x: 'A', y: '1' },
  { x: 'B', y: '1' },
  { x: 'C', y: '1' },
  { x: 'A', y: '2' },
  { x: 'B', y: '2' },
  { x: 'C', y: '2' },
  { x: 'A', y: '3' },
  { x: 'B', y: '3' },
  { x: 'C', y: '3' },
];

export const stepBoard: IStep[] = [
  { id: 1, direction: Direction.None },
  { id: 2, direction: Direction.None },
  { id: 3, direction: Direction.None },
  { id: 4, direction: Direction.None },
  { id: 5, direction: Direction.None },
  { id: 6, direction: Direction.None },
  { id: 7, direction: Direction.None },
  { id: 8, direction: Direction.None },
  { id: 9, direction: Direction.None },
  { id: 10, direction: Direction.None },
];
