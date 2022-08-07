import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ICell } from '../../interfaces/core.interfaces';

export interface FieldProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  startCell: ICell;
  finishCell: ICell;
  restart: () => void;
}
