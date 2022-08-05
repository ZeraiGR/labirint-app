import cn from 'classnames';

import { CellProps } from './Cell.props';
import styles from './Cell.module.scss';
import { ReactComponent as BearIcon } from './icon-bear.svg';
import { ReactComponent as LikeIcon } from './icon-like.svg';

export const Cell = ({
  isStart,
  isChoosen,
  isCorrected,
  className,
  ...props
}: CellProps): JSX.Element => {
  return (
    <li className={cn(styles.cell, className)} {...props}>
      <div className={styles.content}>
        <LikeIcon
          className={cn(
            styles.like,
            { [styles.correct]: isCorrected && isChoosen },
            { [styles.incorrect]: !isCorrected && isChoosen },
            { [styles.hide]: isStart },
          )}
        />
        <BearIcon
          className={cn(styles.bear, { [styles.active]: isStart || (isCorrected && !isChoosen) })}
        />
      </div>
    </li>
  );
};
