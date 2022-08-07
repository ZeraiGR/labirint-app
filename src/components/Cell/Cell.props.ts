import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICell } from '../../interfaces/core.interfaces';

export interface CellProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  isStart: boolean;
  isChoosen: boolean | null;
  hasChoosen: boolean;
  restart: () => void;
  finishCell: ICell;
  x: string;
  y: string;
}
