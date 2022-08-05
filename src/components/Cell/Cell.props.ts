import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CellProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  isStart: boolean;
  isChoosen: boolean;
  isCorrected: boolean;
}
