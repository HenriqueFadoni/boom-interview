import * as actionTypes from '../types/actionTypes';

import { FetchDataInitialStateType, TableElement } from '../types/ReducerStateTypes';
import {
  FetchDataActionTypes,
  FetchDataSuccessAction
} from '../types/actionTypes';

// FOOD, EVENT, REAL STATE, OTHER (TYPES)
const initialState: FetchDataInitialStateType = {
  error: false,
  tables: {
    MONDAY: {
      EVENT: [],
      FOOD: [],
      REALESTATE: [],
      OTHER: [],
      TOTAL: 0
    },
    TUESDAY: {
      EVENT: [],
      FOOD: [],
      REALESTATE: [],
      OTHER: [],
      TOTAL: 0
    },
    WEDNESDAY: {
      EVENT: [],
      FOOD: [],
      REALESTATE: [],
      OTHER: [],
      TOTAL: 0
    },
    THURSDAY: {
      EVENT: [],
      FOOD: [],
      REALESTATE: [],
      OTHER: [],
      TOTAL: 0
    },
    FRIDAY: {
      EVENT: [],
      FOOD: [],
      REALESTATE: [],
      OTHER: [],
      TOTAL: 0
    },
    SATURDAY: {
      EVENT: [],
      FOOD: [],
      REALESTATE: [],
      OTHER: [],
      TOTAL: 0
    },
    SUNDAY: {
      EVENT: [],
      FOOD: [],
      REALESTATE: [],
      OTHER: [],
      TOTAL: 0
    }
  }
}

// Get all data and put it in its respective WEEKDAY/TYPE
const fetchDataSuccess = (state: FetchDataInitialStateType, { payload }: FetchDataSuccessAction) => {
  const newTables = payload.week.reduce((allPosts: { [index: string]: TableElement }, day) => {
    const weekDay = day.day_of_the_week;
    const postType = day.type.split(' ').join('').toUpperCase();

    // @ts-ignore
    allPosts[weekDay][postType].push(day);
    allPosts[weekDay].TOTAL += 1;

    return allPosts
  }, { ...state.tables });

  return {
    ...state,
    tables: newTables
  }
}

// Error Handler
const fetchDataFail = (state: FetchDataInitialStateType) => {
  return {
    ...state,
    error: true
  }
}

const authReducer = (state = initialState, action: FetchDataActionTypes): FetchDataInitialStateType => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_SUCCESS: return fetchDataSuccess(state, action);
    case actionTypes.FETCH_DATA_FAIL: return fetchDataFail(state);
    default: return state;
  }
}

export default authReducer;