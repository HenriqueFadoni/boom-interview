import * as actionTypes from './actionTypes';

export const selectType = type => {
  return {
    type: actionTypes.SELECT_TYPE,
    payload: {
      type
    }
  }
}

export const resetType = () => {
  return {
    type: actionTypes.RESET_TYPE
  }
}