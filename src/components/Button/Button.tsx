import React from 'react';
import cn from 'classnames';

import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={cn(className, styles.button)} type="button">
      {children}
    </button>
  );
};
