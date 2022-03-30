import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import {
  UpdateCellAction,
  MoveCellAction,
  InsertCellAfterAction,
  DeleteCellAction,
  Action,
} from '../actions';
import { CellTypes } from '../cell';
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
