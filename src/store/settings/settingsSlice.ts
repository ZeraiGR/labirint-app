import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { GAME_DESCRIPTION, GAME_NAME, GAME_TITLE } from './coreConstants';

export interface settingsState {
  timeForStep: number;
  stepQuantity: number;
  gameName: string;
  gameTitle: string;
  gameDecription: string;
}

const initialState: settingsState = {
  timeForStep: 500,
  stepQuantity: 10,
  gameName: GAME_NAME,
  gameTitle: GAME_TITLE,
  gameDecription: GAME_DESCRIPTION,
};

export const settingsSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeTimeForStep: (state, action: PayloadAction<number>) => {
      state.timeForStep = action.payload;
    },
  },
});

export const { changeTimeForStep } = settingsSlice.actions;

export default settingsSlice.reducer;
