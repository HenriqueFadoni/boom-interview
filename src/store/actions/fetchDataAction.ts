import * as actionTypes from '../types/actionTypes';
import { Dispatch } from 'redux'
import axios from 'axios';

import { AppActions } from '../types/actionTypes';
import { Post } from '../types/Post';

const fetchDataSuccess = (week: Post[]): AppActions => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: {
      week
    }
  }
}

const fetchDataFail = (): AppActions => {
  return {
    type: actionTypes.FETCH_DATA_FAIL
  }
}

export const fetchData = () => {
  return async (dispatch: Dispatch<AppActions>) => {
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