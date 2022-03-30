import { combineReducers } from 'redux';
import cellReducer from './cellReducer';
import bundleReducer from './bundleReducer';

const reducers = combineReducers({
  cell: cellReducer,
  bundle: bundleReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
