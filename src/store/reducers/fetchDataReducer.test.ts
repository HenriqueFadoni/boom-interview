import { FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from '../types/actionTypes';
import fetchDataReducer from './fetchDataReducer';

describe('FetchData Reducer Test', () => {
  it('Should Return Default State', () => {
    const newState = fetchDataReducer(undefined, {
      // @ts-ignore
      type: 'RANDOM_TYPE_NOT_CREATED'
    });

    expect(newState).toEqual({
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
    });
  });

  it('Should Return Error TRUE', () => {
    const newState = fetchDataReducer(undefined, {
      type: FETCH_DATA_FAIL
    });

    expect(newState).toEqual({
      error: true,
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
    })
  });

  it('Should Arrange Fetch In Tables', () => {
    const newState = fetchDataReducer(undefined, {
      type: FETCH_DATA_SUCCESS,
      payload: {
        week: [
          { 
            id: 1, 
            day_of_the_week: "FRIDAY", 
            type: "Real Estate", 
            client_id: 71, photoshoot_id: 1 
          },
          { 
            id: 1, 
            day_of_the_week: "MONDAY", 
            type: "Food", 
            client_id: 72, 
            photoshoot_id: 7 
          }
        ]
      }
    });

    expect(newState).toEqual({
      error: false,
      tables: {
        MONDAY: {
          EVENT: [],
          FOOD: [{ id: 1, day_of_the_week: "MONDAY", type: "Food", client_id: 72, photoshoot_id: 7 }],
          REALESTATE: [],
          OTHER: [],
          TOTAL: 1
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
          REALESTATE: [{ id: 1, day_of_the_week: "FRIDAY", type: "Real Estate", client_id: 71, photoshoot_id: 1 }],
          OTHER: [],
          TOTAL: 1
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
    })
  });
});
