import * as actionTypes from '../actions/actionTypes';

const initialState = {
  error: false,
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
  const newTables = payload.week.reduce((allPosts, day) => {
    const weekDay = day.day_of_the_week;
    allPosts = { ...state.tables };
    allPosts[weekDay].push(day)
    return allPosts
  }, {});

  return {
    ...state,
    tables: newTables
  }
}

const fetchDataFail = state => {
  return {
    ...state,
    error: true
  }
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS: return fetchDataSuccess(state, action);
    case actionTypes.FETCH_DATA_SUCCESS: return fetchDataFail(state);
    default: return state;
  }
}

export default authReducer;