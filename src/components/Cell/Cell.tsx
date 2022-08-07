import cn from 'classnames';

import { CellProps } from './Cell.props';
import { ICell } from '../../interfaces/core.interfaces';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { selectCoreProps } from '../../store/core/coreSelectors';
import { changeAbleToClick, setChoosenCell } from '../../store/core/coreSlice';

import styles from './Cell.module.scss';
import { ReactComponent as BearIcon } from './icon-bear.svg';
import { ReactComponent as LikeIcon } from './icon-like.svg';
import { selectSettingsProps } from '../../store/settings/settingsSelectors';

export const Cell = ({
  x,
  y,
  isStart,
  isChoosen,
  isCorrected,
  hasChoosen,
  startGame,
  className,
  ...props
}: CellProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isAbleToClick } = useAppSelector(selectCoreProps);
  const { timeBetweenRound } = useAppSelector(selectSettingsProps);

  const chooseCell = () => {
    if (!isAbleToClick) {
      return;
    }
    const currentCell = { x, y } as ICell;

    dispatch(setChoosenCell(currentCell));
    dispatch(changeAbleToClick());

    // new party
    setTimeout(() => {
      startGame();
    }, timeBetweenRound);
  };

  return (
    <li
      className={cn(styles.cell, { [styles.clickable]: isAbleToClick }, className)}
      onClick={chooseCell}
      {...props}>
      <div className={styles.content}>
        <LikeIcon
          className={cn(
            styles.like,
            { [styles.correct]: isCorrected && isChoosen },
            { [styles.incorrect]: !isCorrected && isChoosen },
            { [styles.hide]: isStart },
          )}
        />
        <BearIcon className={cn(styles.bear, { [styles.active]: isStart && !hasChoosen })} />
      </div>
    </li>
  );
};
