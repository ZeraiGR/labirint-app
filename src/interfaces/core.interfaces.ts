export interface ICell {
  x: 'A' | 'B' | 'C';
  y: '1' | '2' | '3';
}

export enum Direction {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right',
  None = 'none',
}

export interface coreState {
  isGameInit: boolean;
  isAbleToClick: boolean;
  startCell: ICell;
  currentCell: ICell;
  finishCell: ICell;
  choosenCell: ICell | null;
  currentDirection: Direction;
}
