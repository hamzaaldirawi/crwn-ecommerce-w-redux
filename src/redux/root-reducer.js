import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//To get actual local storage object in our window browser
// you can chose sessionStorage insted of storage but from dif lib

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory-reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelise: ['cart'] // array contain the reducer we want to storage 
}

const rootReducer = combineReducers({
    user: userReducer, // persist by firebase so no need to persist it.
    cart: cartReducer,
    directory: directoryReducer
});

/*
// we const rootReducer instead of export 
// to export persistReducer
export default combineReducers({
    user: userReducer, // persist by firebase so no need to persist it.
    cart: cartReducer
});
*/ 

export default persistReducer(persistConfig, rootReducer )