import React from 'react';
import cn from 'classnames';

import { StepListProps } from './StepList.props';
import styles from './StepList.module.scss';
import { Step } from '../Step/Step';
import { gameBoard } from '../../utils/gameBoard';

export const StepList = ({ quantity, className, ...props }: StepListProps): JSX.Element => {
  // const [steps, setSteps] = React.useState<ICell[]>(gameBoard);

  return (
    <ul className={cn(styles.list, className)} {...props}>
      {new Array(quantity).fill(<></>).map((step, idx) => (
        <Step key={idx} direction="top" isCurrent={false} />
      ))}
    </ul>
  );
};
