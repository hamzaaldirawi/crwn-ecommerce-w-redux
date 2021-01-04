import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return {...state}; // destructor SHOP_DATA because of error after convert it to object
    }
};

export default shopReducer;