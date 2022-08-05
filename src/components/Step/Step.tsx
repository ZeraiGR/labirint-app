import cn from 'classnames';

import { StepProps } from './Step.props';
import styles from './Step.module.scss';
import { ReactComponent as ArrowIcon } from './icon-arrow.svg';

export const Step = ({ direction, isCurrent, className, ...props }: StepProps): JSX.Element => {
  return (
    <li className={cn(styles.step, className, { [styles.active]: isCurrent })} {...props}>
      <ArrowIcon
        className={cn(
          styles.arrow,
          { [styles.top]: direction === 'top' },
          { [styles.right]: direction === 'right' },
          { [styles.left]: direction === 'left' },
          { [styles.bottom]: direction === 'bottom' },
        )}
      />
    </li>
  );
};
