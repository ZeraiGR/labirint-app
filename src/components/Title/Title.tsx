import React from 'react';
import cn from 'classnames';

import { TitleProps } from './Title.props';
import styles from './Title.module.scss';

//todo 1) Сверстать поле для игры

export const Title = ({ className, children }: TitleProps) => {
  return (
    <button className={cn(className, styles.button)} type="button">
      {children}
    </button>
  );
};
