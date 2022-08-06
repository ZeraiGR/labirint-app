import cn from 'classnames';

import styles from './styles/App.module.scss';
import { Button, Info, Title, Field, StepList } from './components';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { initGame, setStartPosition } from './store/game/gameSlice';
import { getRandomNumber } from './utils/randomizer';
import { selectGameProps } from './store/game/gameSelectors';
import { generateStartPosition } from './utils/generateStartPosition';

function App() {
  const { isGameInit, gameName, gameTitle, gameDecription, timeForStep } =
    useAppSelector(selectGameProps);
  const dispatch = useAppDispatch();

  const startGame = () => {
    dispatch(initGame());

    // start position
    const startPosition = generateStartPosition();
    dispatch(setStartPosition(startPosition));

    setTimeout(() => {}, timeForStep);
  };

  return (
    <div className={cn(styles.wrapper, { [styles.start]: isGameInit })}>
      <Title className={styles.title} tag="h1">
        {gameName || 'Введите название игры'}
      </Title>

      {!isGameInit && (
        <>
          <Info className={styles.info} title={gameTitle} description={gameDecription} />
          <Button onClick={startGame}>Начать игру</Button>
        </>
      )}

      {isGameInit && (
        <>
          <Field />
          <StepList />
        </>
      )}
    </div>
  );
}

export default App;
