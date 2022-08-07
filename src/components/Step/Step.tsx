import cn from 'classnames';

import { StepProps } from './Step.props';
import styles from './Step.module.scss';
import { ReactComponent as ArrowIcon } from './icon-arrow.svg';
import { Direction } from '../../interfaces/core.interfaces';
import { useAppSelector } from '../../hooks/hooks';
import { selectCoreProps } from '../../store/core/coreSelectors';

export const Step = ({ direction, isCurrent, className, ...props }: StepProps): JSX.Element => {
  const { isAbleToClick } = useAppSelector(selectCoreProps);

  return (
    <li
      className={cn(styles.step, className, { [styles.active]: isCurrent && !isAbleToClick })}
      {...props}>
      <ArrowIcon
        className={cn(
          styles.arrow,
          { [styles.none]: direction === Direction.None },
          { [styles.top]: direction === Direction.Up },
          { [styles.right]: direction === Direction.Right },
          { [styles.left]: direction === Direction.Left },
          { [styles.bottom]: direction === Direction.Down },
        )}
      />
    </li>
  );
};
