import cn from 'classnames';
import { motion } from 'framer-motion';

import { useAppSelector } from '../../hooks/hooks';
import { Button, Field, Info, StepList, Title } from '../../components';
import { GameProps } from './Game.props';
import styles from './Game.module.scss';
import { selectCoreProps } from '../../store/core/coreSelectors';
import { selectSettingsProps } from '../../store/settings/settingsSelectors';
import { Link } from 'react-router-dom';

const variants = {
  hide: { opacity: 0, y: '200%' },
  show: { opacity: 1, y: 0 },
};

export const Game = ({ init, finish, restart }: GameProps) => {
  const { isGameInit, startCell, finishCell, isAbleToClick, isUserClickedToCell } =
    useAppSelector(selectCoreProps);
  const { gameName, gameTitle, gameDecription } = useAppSelector(selectSettingsProps);

  return (
    <div className={cn(styles.wrapper, { [styles.start]: isGameInit })}>
      <Title className={styles.title} tag="h1">
        {!isAbleToClick && (gameName || 'Введите название игры')}
        {isAbleToClick && 'Выберите клетку'}
      </Title>

      {!isGameInit && (
        <>
          <Info className={styles.info} title={gameTitle} description={gameDecription} />
          <Button className={styles.btnstart} onClick={init}>
            Начать игру
          </Button>
          <Link className={styles.link} to="/settings">
            Настройки
          </Link>
        </>
      )}

      {isGameInit && (
        <>
          <Field startCell={startCell} finishCell={finishCell} restart={restart} />
          <motion.div animate={isUserClickedToCell ? 'hide' : 'show'} variants={variants}>
            <StepList className={styles.stepList} />
          </motion.div>
          <Button className={styles.btnend} disabled={!isAbleToClick} onClick={finish}>
            Завершить игру
          </Button>
        </>
      )}
    </div>
  );
};
