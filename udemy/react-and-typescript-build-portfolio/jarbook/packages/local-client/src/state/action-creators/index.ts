import { RootState } from '../reducers';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import axios from 'axios';
import {
  UpdateCellAction,
  MoveCellAction,
  InsertCellAfterAction,
  DeleteCellAction,
  Action,
} from '../actions';
import { Cell, CellTypes } from '../cell';
import { DirectionTypes } from '../direction';
import bundler from '../../bundler';

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: ActionTypes.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: ActionTypes.DELETE_CELL,
    payload: id,
  };
};

export const moveCell = (
  id: string,
  direction: DirectionTypes
): MoveCellAction => {
  return {
    type: ActionTypes.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const insertCellAfter = (
  id: string | null,
  cellType: CellTypes
): InsertCellAfterAction => {
  return {
    type: ActionTypes.INSERT_CELL_AFTER,
    payload: {
      id,
      type: cellType,
    },
  };
};

export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.BUNDLE_START,
      payload: {
        cellId,
      },
    });

    const result = await bundler(input);

    dispatch({
      type: ActionTypes.BUNDLE_COMPLETE,
      payload: {
        cellId,
        bundle: result,
      },
    });
  };
};

export const fetchCell = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.FETCH_CELL });

    try {
      const { data }: { data: Cell[] } = await axios.get('/cell');
      dispatch({
        type: ActionTypes.FETCH_CELL_COMPLETE,
        payload: data,
      });
    } catch (error) {
      if (error instanceof Error) {
        dispatch({
          type: ActionTypes.FETCH_CELL_ERROR,
          payload: error.message,
        });
      } else {
        throw error;
      }
    }
  };
};

export const saveCell = () => {
  return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
    const {
      cell: { data, order },
    } = getState();
    const cell = order.map((id) => data[id]);
    try {
      await axios.post('/cell', { cell });
    } catch (error: unknown) {
      if (error instanceof Error) {
        dispatch({
          type: ActionTypes.SAVE_CELL_ERROR,
          payload: error.message,
        });
      } else {
        throw error;
      }
    }
  };
};
