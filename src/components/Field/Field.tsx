import cn from 'classnames';

import { FieldProps } from './Field.props';
import styles from './Field.module.scss';
import { gameBoard } from '../../utils/gameBoard';
import { Cell } from '../Cell/Cell';
import { useAppSelector } from '../../hooks/hooks';
import { selectCoreProps } from '../../store/core/coreSelectors';

export const Field = ({
  startCell,
  finishCell,
  restart,
  className,
  ...props
}: FieldProps): JSX.Element => {
  const { choosenCell } = useAppSelector(selectCoreProps);

  return (
    <ul className={cn(styles.field, className)} {...props}>
      {gameBoard.map((c) => (
        <Cell
          className={styles.cell}
          key={`${c.x}-${c.y}`}
          x={c.x}
          y={c.y}
          isStart={startCell.x === c.x && startCell.y === c.y}
          isChoosen={choosenCell && choosenCell.x === c.x && choosenCell.y === c.y}
          hasChoosen={choosenCell !== null}
          finishCell={finishCell}
          restart={restart}
        />
      ))}
    </ul>
  );
};
