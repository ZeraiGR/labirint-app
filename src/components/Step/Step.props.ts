import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Direction } from '../../interfaces/core.interfaces';

export interface StepProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  direction: Direction;
  isCurrent: boolean;
}
