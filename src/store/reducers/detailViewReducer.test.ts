import { SELECT_TYPE, RESET_TYPE } from '../types/actionTypes';

import detailViewReducer from './detailViewReducer';

describe('DetailView Reducer Test', () => {
  it('Should Return Default State', () => {
    const newState = detailViewReducer(undefined, {
      // @ts-ignore
      type: 'RANDOM_TYPE_NOT_CREATED'
    });

    expect(newState).toEqual({ typeSelected: '' });
  });

  it('Should Return TypeSelected', () => {
    const newState = detailViewReducer(undefined, {
      type: SELECT_TYPE,
      payload: {
        type: 'EVENT'
      }
    });

    expect(newState).toEqual({ typeSelected: 'EVENT' });
  });

  it('Should Reselect TypeSelected', () => {
    let newState = detailViewReducer(undefined, {
      type: SELECT_TYPE,
      payload: {
        type: 'EVENT'
      }
    });

    newState = detailViewReducer(undefined, {
      type: SELECT_TYPE,
      payload: {
        type: 'FOOD'
      }
    });

    expect(newState).toEqual({ typeSelected: 'FOOD' });
  });

  it('Should Reset TypeSelected', () => {
    let newState = detailViewReducer(undefined, {
      type: SELECT_TYPE,
      payload: {
        type: 'EVENT'
      }
    });

    newState = detailViewReducer(undefined, {
      type: RESET_TYPE
    });

    expect(newState).toEqual({ typeSelected: '' });
  });
});
