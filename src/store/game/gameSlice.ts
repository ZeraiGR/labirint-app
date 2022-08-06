import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { GAME_DESCRIPTION, GAME_NAME, GAME_TITLE } from './gameConstants';

export interface Cell {
  x: '1' | '2' | '3';
  y: 'A' | 'B' | 'C';
}

export interface gameState {
  isGameInit: boolean;
  isAbleToClick: boolean;
  timeForStep: number;
  startPosition: Cell;
  currentPosition: Cell;
  gameName: string;
  gameTitle: string;
  gameDecription: string;
}

const initialState: gameState = {
  isGameInit: false,
  isAbleToClick: false,
  timeForStep: 500,
  startPosition: { x: '1', y: 'A' },
  currentPosition: { x: '1', y: 'A' },
  gameName: GAME_NAME,
  gameTitle: GAME_TITLE,
  gameDecription: GAME_DESCRIPTION,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    doStep: (state, action: PayloadAction<Cell>) => {
      state.currentPosition = action.payload;
    },
    initGame: (state) => {
      state.isGameInit = true;
    },
    setStartPosition: (state, action: PayloadAction<Cell>) => {
      state.startPosition = action.payload;
    },
    changeAbleToClick: (state) => {
      state.isAbleToClick = !state.isAbleToClick;
    },
    changeTimeForStep: (state, action: PayloadAction<number>) => {
      state.timeForStep = action.payload;
    },
  },
});

export const { doStep, initGame, setStartPosition, changeAbleToClick } = gameSlice.actions;

export default gameSlice.reducer;
