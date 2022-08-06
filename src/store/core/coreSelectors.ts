import { RootState } from '..';
import { coreState } from '../../interfaces/core.interfaces';

export const selectCoreProps = (state: RootState): coreState => state.core;
