import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // Pretty when debug Redux
import { persistStore } from 'redux-persist';
// It's allow our browser to cache our store.

import rootReducer from './root-reducer';

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
