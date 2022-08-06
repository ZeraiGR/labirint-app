import cn from 'classnames';

import styles from './styles/App.module.scss';
import { Button, Info, Title, Field, StepList } from './components';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { initGame, setStartPosition, setCurrentPosition, Cell } from './store/game/gameSlice';
import { selectGameProps } from './store/game/gameSelectors';
import { generateStartPosition } from './utils/generateStartPosition';
import { updatePosition } from './utils/udpatePosition';

function App() {
  const { isGameInit, gameName, gameTitle, gameDecription, timeForStep } =
    useAppSelector(selectGameProps);
  const dispatch = useAppDispatch();

  const startGameLoop = (startPosition: Cell) => {
    let currentPosition = startPosition;
    let counter = 0;

    let id = setInterval(() => {
      counter++;

      const [updatedPosition, route] = updatePosition(currentPosition);
      currentPosition = updatedPosition;
      dispatch(setCurrentPosition(currentPosition));
      console.log(currentPosition, route);

      if (counter === 10) {
        clearInterval(id);
      }
    }, timeForStep);
  };

  const startGame = () => {
    dispatch(initGame());

    // set start position
    const startPosition = generateStartPosition();
    dispatch(setStartPosition(startPosition));

    // start game loop
    setTimeout(() => {
      startGameLoop(startPosition);
    }, timeForStep);
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
