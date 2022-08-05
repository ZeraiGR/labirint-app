import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface StepProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  direction: 'top' | 'bottom' | 'left' | 'right' | 'none';
  isCurrent: boolean;
}
