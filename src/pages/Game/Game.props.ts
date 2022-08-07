import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface GameProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  init: () => void;
  restart: () => void;
  finish: () => void;
}
