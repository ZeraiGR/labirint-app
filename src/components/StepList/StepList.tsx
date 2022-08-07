import React from 'react';
import cn from 'classnames';

import { StepListProps } from './StepList.props';
import styles from './StepList.module.scss';
import { Step } from '../Step/Step';
import { stepBoard } from '../../utils/gameBoard';
import { useAppSelector } from '../../hooks/hooks';
import { selectCoreProps } from '../../store/core/coreSelectors';
import { Direction, IStep } from '../../interfaces/core.interfaces';

export const StepList = ({ className, ...props }: StepListProps): JSX.Element => {
  const [steps, setSteps] = React.useState<IStep[]>(stepBoard);
  const { currentDirection, currentStep } = useAppSelector(selectCoreProps);

  React.useEffect(() => {
    setSteps(
      steps.map((s) => {
        if (s.id === currentStep) {
          s.direction = currentDirection;
        } else if (s.id > currentStep) {
          s.direction = Direction.None;
        }

        return s;
      }),
    );
  }, [currentDirection, currentStep]);

  return (
    <ul className={cn(styles.list, className)} {...props}>
      {steps.map((step) => (
        <Step key={step.id} direction={step.direction} isCurrent={step.id === currentStep} />
      ))}
    </ul>
  );
};
