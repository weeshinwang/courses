import produce from 'immer';
import { ActionTypes } from '../action-types';
import { Action } from '../actions';

interface BundleState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        error: string;
      }
    | undefined;
}

const initialState: BundleState = {};

const bundleReducer = produce(
  (state: BundleState, action: Action): BundleState => {
    switch (action.type) {
      case ActionTypes.BUNDLE_START:
        state[action.payload.cellId] = {
          loading: true,
          code: '',
          error: '',
        };
        return state;
      case ActionTypes.BUNDLE_COMPLETE:
        const { code, error } = action.payload.bundle;
        state[action.payload.cellId] = {
          loading: false,
          code,
          error,
        };
        return state;
      default:
        return state;
    }
  },
  initialState
);

export default bundleReducer;
