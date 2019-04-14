import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import appReducer from './reducers';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

//  This is needed for Redux Chrome extension DEV tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, 
  composeEnhancers(
    //  Thunk is needed for action creator async / await dispatch / getState access
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('root')
);