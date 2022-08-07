import React, { Ref } from 'react';
import cn from 'classnames';

import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input = React.forwardRef(
  ({ className, ...props }: InputProps, ref: Ref<HTMLInputElement>): JSX.Element => {
    return <input ref={ref} className={cn(styles.input, className)} {...props} />;
  },
);
