import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MinMaxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  min: number;
  max?: number;
  current: number;
  onUpdate: (n: number) => void;
}
