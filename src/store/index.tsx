import { configureStore } from '@reduxjs/toolkit';
import coreReducer from './core/coreSlice';
import settingsReducer from './settings/settingsSlice';

export const store = configureStore({
  reducer: {
    core: coreReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
