import * as actionTypes from '../types/actionTypes';
import { AppActions } from '../types/actionTypes';

export const selectType = (type: string): AppActions => {
  return {
    type: actionTypes.SELECT_TYPE,
    payload: {
      type
    }
  }
}

export const resetType = (): AppActions => {
  return {
    type: actionTypes.RESET_TYPE
  }
}