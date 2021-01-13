// we created this only when we stored shop-data in fire base 

import ShopActionTypes from './shop.types';

export const updateCollections = collectionsMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})