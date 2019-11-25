import * as actionTypes from '../types/actionTypes';

import { DetailViewInitialStateType } from '../types/ReducerStateTypes';
import { DetailViewActionTypes, SelectTypeAction } from '../types/actionTypes';

const initialState: DetailViewInitialStateType = {
  typeSelected: ''
}

const selectType = (state: DetailViewInitialStateType, { payload }: SelectTypeAction) => {
  return {
    ...state,
    typeSelected: payload.type
  }
}

const resetType = (state: DetailViewInitialStateType) => {
  return {
    ...state,
    typeSelected: null
  }
}

const detailViewReducer = (state = initialState, action: DetailViewActionTypes) => {
  switch (action.type) {
    case actionTypes.SELECT_TYPE: return selectType(state, action);
    case actionTypes.RESET_TYPE: return resetType(state);
    default: return state;
  }
}

export default detailViewReducer;