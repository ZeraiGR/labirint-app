import cn from 'classnames';

import { InfoProps } from './Info.props';
import styles from './Info.module.scss';

export const Info = ({ children, className, ...props }: InfoProps): JSX.Element => {
  return (
    <div className={cn(styles.info, className)} {...props}>
      {children}
    </div>
  );
};
