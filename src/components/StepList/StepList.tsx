import cn from 'classnames';

import { StepListProps } from './StepList.props';
import styles from './StepList.module.scss';
import { Step } from '../Step/Step';

export const StepList = ({ className, ...props }: StepListProps): JSX.Element => {
  return (
    <ul className={cn(styles.list, className)} {...props}>
      {new Array(10).fill(<></>).map((step, idx) => (
        <Step key={idx} direction="top" isCurrent={false} />
      ))}
    </ul>
  );
};
