import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Style
import './sass/main.scss';

// Redux Imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import fetchDataReducer from './store/reducers/fetchDataReducer';
import detailViewReducer from './store/reducers/detailViewReducer';
import { AppActions } from './store/types/actionTypes';

// Redux Debugger
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Redux Setup
const rootReducer = combineReducers({
  fetchOptions: fetchDataReducer,
  detailOptions: detailViewReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
  )
);

const app = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
