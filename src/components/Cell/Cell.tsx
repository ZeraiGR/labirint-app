import React from 'react';
import cn from 'classnames';

import { CellProps } from './Cell.props';
import { ICell } from '../../interfaces/core.interfaces';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { selectCoreProps } from '../../store/core/coreSelectors';
import {
  changeAbleToClick,
  setChoosenCell,
  setResultStatus,
  changeUserClickedToCellStatus,
} from '../../store/core/coreSlice';

import styles from './Cell.module.scss';
import { ReactComponent as BearIcon } from './icon-bear.svg';
import { ReactComponent as LikeIcon } from './icon-like.svg';
import { selectSettingsProps } from '../../store/settings/settingsSelectors';

export const Cell = ({
  x,
  y,
  isStart,
  isChoosen,
  hasChoosen,
  finishCell,
  restart,
  className,
  ...props
}: CellProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isAbleToClick, isUserClickedToCell } = useAppSelector(selectCoreProps);
  const { timeBetweenRound } = useAppSelector(selectSettingsProps);
  const isCorrected = finishCell.x === x && finishCell.y === y;

  const chooseCell = () => {
    if (!isAbleToClick) {
      return;
    }

    dispatch(changeUserClickedToCellStatus(true));

    const currentCell = { x, y } as ICell;
    dispatch(setChoosenCell(currentCell));
    dispatch(changeAbleToClick());

    if (isCorrected) {
      dispatch(setResultStatus(true));
    } else {
      dispatch(setResultStatus(false));
    }

    // new party
    setTimeout(() => {
      dispatch(changeUserClickedToCellStatus(false));
      restart();
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
        <BearIcon
          className={cn(
            styles.bear,
            { [styles.active]: isStart && !hasChoosen },
            { [styles.wascorrected]: isCorrected && !isChoosen && isUserClickedToCell },
          )}
        />
      </div>
    </li>
  );
};
