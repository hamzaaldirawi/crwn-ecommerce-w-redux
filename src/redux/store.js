import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // Pretty when debug Redux
import { persistStore } from 'redux-persist';
// It's allow our browser to cache our store.

import rootReducer from './root-reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
    // This is to hide logger console in build and show it only in develpment mode
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
