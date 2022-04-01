import { ActionTypes } from '../action-types';
import { Cell, CellTypes } from '../cell';
import { DirectionTypes } from '../direction';

export interface MoveCellAction {
  type: ActionTypes.MOVE_CELL;
  payload: {
    id: string;
    direction: DirectionTypes;
  };
}

export interface DeleteCellAction {
  type: ActionTypes.DELETE_CELL;
  payload: string;
}

export interface InsertCellAfterAction {
  type: ActionTypes.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

export interface UpdateCellAction {
  type: ActionTypes.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export interface BundleStartAction {
  type: ActionTypes.BUNDLE_START;
  payload: {
    cellId: string;
  };
}

export interface BundleCompleteAction {
  type: ActionTypes.BUNDLE_COMPLETE;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      error: string;
    };
  };
}

export interface FetchCellAction {
  type: ActionTypes.FETCH_CELL;
}

export interface FetchCellCompleteAction {
  type: ActionTypes.FETCH_CELL_COMPLETE;
  payload: Cell[];
}

export interface FetchCellErrorAction {
  type: ActionTypes.FETCH_CELL_ERROR;
  payload: string;
}

export interface SaveCellErrorAction {
  type: ActionTypes.SAVE_CELL_ERROR;
  payload: string;
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAfterAction
  | UpdateCellAction
  | BundleStartAction
  | BundleCompleteAction
  | FetchCellAction
  | FetchCellCompleteAction
  | FetchCellErrorAction
  | SaveCellErrorAction;
