import * as actionTypes from './actionTypes';
import axios from 'axios';

const fetchDataSuccess = week => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: {
      week
    }
  }
}

const fetchDataFail = () => {
  return {
    type: actionTypes.FETCH_DATA_FAIL
  }
}

export const fetchData = () => {
  return async dispatch => {
    try {
      const path = 'https://frontend-test-api-server.herokuapp.com/photoshoots_daily/?limit=50';
      const { data } = await axios.get(path);
      dispatch(fetchDataSuccess(data));
    }
    catch (error) {
      dispatch(fetchDataFail());
    }
  }
}