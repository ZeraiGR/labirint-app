import { RootState } from '..';
import { settingsState } from './settingsSlice';

export const selectSettingsProps = (state: RootState): settingsState => state.settings;
