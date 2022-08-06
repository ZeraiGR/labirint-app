import { DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';

export interface InfoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  description: string;
  children?: ReactNode;
}
