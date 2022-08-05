import cn from 'classnames';

import { PProps } from './P.props';
import styles from './P.module.scss';

export const P = ({ className, children, ...props }: PProps): JSX.Element => {
  return (
    <p className={cn(className, styles.p)} {...props}>
      {children}
    </p>
  );
};
