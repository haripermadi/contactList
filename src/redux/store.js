import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import contactReducer from './contact/contact.reducer';

const middlewares = [thunk, logger];

const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
