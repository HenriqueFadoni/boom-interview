import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tables: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  }
}

const fetchDataSuccess = (state, { payload }) => {
  return {
    ...state,
    tables: {
      ...state.tables,
      monday: payload.data
    }
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS: return fetchDataSuccess(state, action);
    default: return state;
  }
}

export default authReducer;