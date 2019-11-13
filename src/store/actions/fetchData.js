import * as actionTypes from './actionTypes';
import axios from 'axios';

const fetchDataSuccess = data => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: {
      data
    }
  }
}

export const fetchData = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('https://frontend-test-api-server.herokuapp.com/photoshoots_daily/?limit=10');
      dispatch(fetchDataSuccess(data));
    }
    catch (error) {
      console.log(error)
    }
  }
}