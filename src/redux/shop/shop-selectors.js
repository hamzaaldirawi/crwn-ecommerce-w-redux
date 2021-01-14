import { createSelector } from 'reselect';

// map collectionId to id number of collections
/* used when shop-data was an array to select the correct collection 
const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}
*/
const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);
/*
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key]) // to return Object to Array 
    object.key can't hanlde null directly so we have to make if 
)
*/
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : [] 

)
/*
because of error when we refresh shop/url because can't access collectionUrlParam becuase of null 
so we'll solve it again with if
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections[collectionUrlParam]
);
*/

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectShopCollections],
    collections => collections ? collections[collectionUrlParam] : null
);

/*
used when shop-date was an array
export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectShopCollections],
        collections => collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    )
*/