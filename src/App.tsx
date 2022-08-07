import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from './hooks/hooks';
import {
  initGame,
  finishGame,
  setstartCell,
  setcurrentCell,
  setfinishCell,
  changeAbleToClick,
  setCurrentDirection,
  setCurrentStep,
} from './store/core/coreSlice';
import { selectSettingsProps } from './store/settings/settingsSelectors';
import { generatestartCell } from './utils/generateStartPosition';
import { updatePosition } from './utils/udpatePosition';
import { ICell } from './interfaces/core.interfaces';
import { Game, Settings } from './pages';

function App() {
  const dispatch = useAppDispatch();
  const { timeForStep } = useAppSelector(selectSettingsProps);

  // settings game logic
  React.useEffect(() => {
    let steptime = timeForStep.toString().replaceAll('0', '');
    document.documentElement.style.setProperty('--steptime', `0.${steptime}s`);
  }, []);

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
      dispatch(setCurrentStep(counter));

      if (counter === 10) {
        clearInterval(id);
        dispatch(setfinishCell(currentCell));

        setTimeout(() => {
          dispatch(changeAbleToClick());
          dispatch(setCurrentStep(11));
        }, timeForStep);
      }
    }, timeForStep);
  };

  const start = () => {
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
    start();
  };

  const finish = () => {
    dispatch(finishGame());
  };

  const restart = () => {
    finish();
    init();
  };

  return (
    <Routes>
      <Route path="/" element={<Game init={init} restart={restart} finish={finish} />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
