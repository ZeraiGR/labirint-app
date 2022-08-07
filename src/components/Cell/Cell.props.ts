import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CellProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  isStart: boolean;
  isChoosen: boolean | null;
  isCorrected: boolean;
  hasChoosen: boolean;
  startGame: () => void;
  x: string;
  y: string;
}
