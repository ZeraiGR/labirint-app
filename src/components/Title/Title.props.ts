import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface TitleProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}
