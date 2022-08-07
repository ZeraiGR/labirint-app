import React from 'react';
import cn from 'classnames';

import { SettingItemProps, ValueType } from './SettingItem.props';
import styles from './SettingItem.module.scss';
import { MinMax } from '../MinMax/MinMax';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import {
  setTimeForStep,
  setTimeBetWeenRound,
  setGameName,
  setGameTitle,
  setGameDecription,
} from '../../store/settings/settingsSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { Textarea } from '../Textarea/Textarea';

export const SettingItem = ({
  title,
  id,
  setType,
  valueType,
  max,
  defaultData,
  className,
  ...props
}: SettingItemProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState<number | string>(defaultData);

  const setNumValue = (v: number | string) => {
    setValue(v);
  };

  const IsetStrValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const TAsetStrValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const saveToLocalStorage = (type: string, value: string) => {
    window.localStorage.setItem(type, value);
  };

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (setType) {
      case 'timestep':
        dispatch(setTimeForStep(value as number));
        saveToLocalStorage('timestep', value.toString());
        break;
      case 'timeround':
        dispatch(setTimeBetWeenRound(value as number));
        saveToLocalStorage('timeround', value.toString());
        break;
      case 'gamename':
        dispatch(setGameName(value as string));
        saveToLocalStorage('gamename', value.toString());
        break;
      case 'gametitle':
        dispatch(setGameTitle(value as string));
        saveToLocalStorage('gametitle', value.toString());
        break;
      case 'gamedescription':
        dispatch(setGameDecription(value as string));
        saveToLocalStorage('gamedescription', value.toString());
        break;

      default:
        throw new Error('Определите тип данных');
    }
  };

  return (
    <div className={cn(styles.setting, className)} {...props}>
      <form className={styles.form} onSubmit={submitForm}>
        <label className={styles.label} htmlFor={id}>
          {title}
        </label>

        {valueType === ValueType.number && (
          <MinMax
            className={styles.field}
            id={id}
            min={100}
            max={max}
            current={value as number}
            onUpdate={setNumValue}
          />
        )}

        {valueType === ValueType.string && (
          <Input className={styles.field} value={value} onChange={IsetStrValue} />
        )}

        {valueType === ValueType.text && (
          <Textarea
            className={cn(styles.field, styles.textarea)}
            value={value}
            onChange={TAsetStrValue}
          />
        )}

        <Button type="submit">Сохранить</Button>
      </form>
    </div>
  );
};
