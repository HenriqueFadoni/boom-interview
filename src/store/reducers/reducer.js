import * as actionTypes from '../actions/actionTypes';

const initialState = {
  tables: {
    MONDAY: [],
    TUESDAY: [],
    WEDNESDAY: [],
    THURSDAY: [],
    FRIDAY: [],
    SATURDAY: [],
    SUNDAY: []
  }
}

const fetchDataSuccess = (state, { payload }) => {
  let newTables = {
    ...state.tables
  };

  payload.week.forEach(day => {
    const weekDay = day.day_of_the_week;
    newTables[weekDay].push(day)
  });

  return {
    ...state,
    tables: newTables
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS: return fetchDataSuccess(state, action);
    default: return state;
  }
}

export default authReducer;