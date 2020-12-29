import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // Pretty when debug Redux
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;