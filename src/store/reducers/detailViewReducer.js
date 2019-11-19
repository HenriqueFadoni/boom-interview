import * as actionTypes from '../actions/actionTypes';

const initialState = {
  typeSelected: ''
}

const selectType = (state, { payload }) => {
  return {
    ...state,
    typeSelected: payload.type
  }
}

const resetType = state => {
  return {
    ...state,
    typeSelected: null
  }
}

const detailViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_TYPE: return selectType(state, action);
    case actionTypes.RESET_TYPE: return resetType(state);
    default: return state;
  }
}

export default detailViewReducer;