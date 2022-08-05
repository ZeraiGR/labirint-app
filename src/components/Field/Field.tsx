import cn from 'classnames';

import { Cell } from '../Cell/Cell';
import { FieldProps } from './Field.props';
import styles from './Field.module.scss';

export const Field = ({ className, ...props }: FieldProps): JSX.Element => {
  return (
    <ul className={cn(styles.field, className)} {...props}>
      {new Array(9).fill(<></>).map((cell, idx) => (
        <Cell key={idx} isStart={true} isChoosen={true} isCorrected={false} />
      ))}
    </ul>
  );
};
