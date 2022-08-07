import React, { Ref } from 'react';
import cn from 'classnames';

import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.scss';

export const Textarea = React.forwardRef(
  ({ className, ...props }: TextareaProps, ref: Ref<HTMLTextAreaElement>): JSX.Element => {
    return <textarea ref={ref} className={cn(styles.input, className)} {...props} />;
  },
);
