import { Post } from './Post';

// Action Types

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const SELECT_TYPE = 'SELECT_TYPE';
export const RESET_TYPE = 'RESET_TYPE';

// Action Interfaces

export interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS,
  payload: {
    week: Post[]
  }
}

export interface FetchDataFailAction {
  type: typeof FETCH_DATA_FAIL
}

export interface SelectTypeAction {
  type: typeof SELECT_TYPE,
  payload: {
    type: string
  }
}

export interface ResetTypeAction {
  type: typeof RESET_TYPE
}

// Bundling Up and Exporting

export type FetchDataActionTypes = FetchDataSuccessAction | FetchDataFailAction

export type DetailViewActionTypes = SelectTypeAction | ResetTypeAction

export type AppActions = FetchDataActionTypes | DetailViewActionTypes
