import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { GAME_DESCRIPTION, GAME_NAME, GAME_TITLE } from './coreConstants';
import { getDataFromLS } from '../../utils/getDataFromLS';
export interface settingsState {
  timeForStep: number;
  timeBetweenRound: number;
  gameName: string;
  gameTitle: string;
  gameDecription: string;
}

const initialState: settingsState = {
  timeForStep: Number(getDataFromLS('timestep')) || 500,
  timeBetweenRound: Number(getDataFromLS('timeround')) || 1500,
  gameName: getDataFromLS('gamename') || GAME_NAME,
  gameTitle: getDataFromLS('gametitle') || GAME_TITLE,
  gameDecription: getDataFromLS('gamedescription') || GAME_DESCRIPTION,
};

export const settingsSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setTimeForStep: (state, action: PayloadAction<number>) => {
      state.timeForStep = action.payload;
    },
    setTimeBetWeenRound: (state, action: PayloadAction<number>) => {
      state.timeBetweenRound = action.payload;
    },
    setGameName: (state, action: PayloadAction<string>) => {
      state.gameName = action.payload;
    },
    setGameTitle: (state, action: PayloadAction<string>) => {
      state.gameTitle = action.payload;
    },
    setGameDecription: (state, action: PayloadAction<string>) => {
      state.gameDecription = action.payload;
    },
  },
});

export const { setTimeForStep, setTimeBetWeenRound, setGameName, setGameTitle, setGameDecription } =
  settingsSlice.actions;

export default settingsSlice.reducer;
