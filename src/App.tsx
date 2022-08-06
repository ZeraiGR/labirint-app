import { useAppDispatch, useAppSelector } from './hooks/hooks';
import {
  initGame,
  finishGame,
  setstartCell,
  setcurrentCell,
  setfinishCell,
  changeAbleToClick,
  setCurrentDirection,
} from './store/core/coreSlice';
import { selectSettingsProps } from './store/settings/settingsSelectors';
import { generatestartCell } from './utils/generateStartPosition';
import { updatePosition } from './utils/udpatePosition';
import { ICell } from './interfaces/core.interfaces';
import { Game } from './pages';

function App() {
  const dispatch = useAppDispatch();
  const { timeForStep, stepQuantity } = useAppSelector(selectSettingsProps);

  // core game logic
  const startGameLoop = (startCell: ICell) => {
    let currentCell = startCell;
    let counter = 0;

    let id = setInterval(() => {
      counter++;

      const [updatedPosition, route] = updatePosition(currentCell);
      currentCell = updatedPosition;
      dispatch(setcurrentCell(currentCell));
      dispatch(setCurrentDirection(route));

      if (counter === stepQuantity) {
        clearInterval(id);
        dispatch(setfinishCell(currentCell));
        dispatch(changeAbleToClick());
      }
    }, timeForStep);
  };

  const startGame = () => {
    // set start position
    const startCell = generatestartCell();
    dispatch(setstartCell(startCell));

    // start game loop
    setTimeout(() => {
      startGameLoop(startCell);
    }, timeForStep);
  };

  const init = () => {
    dispatch(initGame());
    startGame();
  };

  const finish = () => {
    dispatch(finishGame());
  };

  return <Game init={init} startGame={startGame} finish={finish} />;
}

export default App;
