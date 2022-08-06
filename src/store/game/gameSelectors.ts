import { RootState } from '..';
import { gameState } from './gameSlice';

export const selectGameProps = (state: RootState): gameState => state.game;
