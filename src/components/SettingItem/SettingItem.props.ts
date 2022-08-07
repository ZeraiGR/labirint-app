import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum ValueType {
  string,
  number,
  text,
}

export interface SettingItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  id: string;
  setType: string;
  valueType: ValueType;
  max?: number;
  defaultData: number | string;
}
