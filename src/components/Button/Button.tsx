import cn from 'classnames';

import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button = ({ className, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={cn(className, styles.button)} type="button" {...props}>
      {children}
    </button>
  );
};
