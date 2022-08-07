import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ICell, coreState, Direction } from '../../interfaces/core.interfaces';

const initCell = { x: 'A', y: '1' } as ICell;

const initialState: coreState = {
  isGameInit: false,
  isAbleToClick: false,
  startCell: initCell,
  currentCell: initCell,
  finishCell: initCell,
  choosenCell: null,
  currentDirection: Direction.None,
  currentStep: 0,
};

export const coreSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    initGame: (state) => {
      state.isGameInit = true;
    },
    setstartCell: (state, action: PayloadAction<ICell>) => {
      state.startCell = action.payload;
    },
    setcurrentCell: (state, action: PayloadAction<ICell>) => {
      state.currentCell = action.payload;
    },
    setfinishCell: (state, action: PayloadAction<ICell>) => {
      state.finishCell = action.payload;
    },
    setChoosenCell: (state, action: PayloadAction<ICell>) => {
      state.choosenCell = action.payload;
    },
    setCurrentDirection: (state, action: PayloadAction<Direction>) => {
      state.currentDirection = action.payload;
      state.currentStep = state.currentStep + 1;
    },
    changeAbleToClick: (state) => {
      state.isAbleToClick = !state.isAbleToClick;
    },
    finishGame: () => initialState,
  },
});

export const {
  initGame,
  finishGame,
  setstartCell,
  setcurrentCell,
  setfinishCell,
  setChoosenCell,
  setCurrentDirection,
  changeAbleToClick,
} = coreSlice.actions;

export default coreSlice.reducer;
