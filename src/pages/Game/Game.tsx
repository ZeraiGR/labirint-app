import cn from 'classnames';

import { useAppSelector } from '../../hooks/hooks';
import { Button, Field, Info, StepList, Title } from '../../components';
import { GameProps } from './Game.props';
import styles from './Game.module.scss';
import { selectCoreProps } from '../../store/core/coreSelectors';
import { selectSettingsProps } from '../../store/settings/settingsSelectors';

export const Game = ({ init, finish, startGame }: GameProps) => {
  const { isGameInit, startCell, currentDirection, finishCell, choosenCell } =
    useAppSelector(selectCoreProps);
  const { gameName, gameTitle, gameDecription } = useAppSelector(selectSettingsProps);

  return (
    <div className={cn(styles.wrapper, { [styles.start]: isGameInit })}>
      <Title className={styles.title} tag="h1">
        {gameName || 'Введите название игры'}
      </Title>

      {!isGameInit && (
        <>
          <Info className={styles.info} title={gameTitle} description={gameDecription} />
          <Button onClick={init}>Начать игру</Button>
        </>
      )}

      {isGameInit && (
        <>
          <Field startCell={startCell} finishCell={finishCell} startGame={startGame} />
          <StepList className={styles.stepList} />
          <Button onClick={finish}>Завершить игру</Button>
        </>
      )}
    </div>
  );
};
