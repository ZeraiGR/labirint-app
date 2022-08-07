import React, { KeyboardEvent } from 'react';
import cn from 'classnames';

import { MinMaxProps } from './MinMax.props';
import styles from './MinMax.module.scss';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export const MinMax = ({
  min = 100,
  max = 10000,
  current,
  onUpdate,
  className,
  ...props
}: MinMaxProps): JSX.Element => {
  let input = React.useRef<HTMLInputElement>(null);

  function onKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      parseCurrentStr();
    }
  }

  function parseCurrentStr() {
    let value = input.current ? input.current.value : '';
    let num = parseInt(value);
    applyCurrent(isNaN(num) ? min : num);
  }

  function applyCurrent(num: number) {
    let validNum = Math.max(min, Math.min(max, num));
    if (input.current) {
      input.current.value = validNum.toString();
    }
    onUpdate && onUpdate(validNum);
  }

  let inc = () => applyCurrent(current + 100);
  let dec = () => applyCurrent(current - 100);

  React.useEffect(() => {
    if (input.current) {
      input.current.value = current.toString();
    }
  }, [current]);

  return (
    <div className={cn(styles.minmax, className)} {...props}>
      <Button className={styles.btn} type="button" onClick={dec}>
        -
      </Button>
      <Input
        ref={input}
        type="text"
        className={styles.input}
        defaultValue={current}
        onBlur={parseCurrentStr}
        onKeyPress={onKeyPress}
      />
      <Button className={styles.btn} type="button" onClick={inc}>
        +
      </Button>
    </div>
  );
};
