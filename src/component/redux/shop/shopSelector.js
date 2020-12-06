import {createSelector} from 'reselect';
import collection from '../../collection/collection';

// new array  將物件Catgoary成array  id貼標籤
// const COLLECTION_ID_MAP ={
//     hats:1,
//     sneakers:2,
//     jackets:3,
//     womens:4,
//     mens:5,
// }
// shop 指向的 state 
const selectShop = state => state.shop

// NEW 新的createSelector 有 
export const selectCollections = createSelector(
    [selectShop], // 上面的state 
    shop => shop.collections
)


// 取得 firebase 的 collection
export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map( key => collections[key]) : []
  );

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetch
)


// collectionUrlParam => (參數的字串) 傳入COLLECTION_ID_MAP中去尋找
// export const selectCollection = collectionUrlParam => createSelector(
// [selectCollections],
// data = find() 去找 collection內的ID =  {物件} 
// collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
// )
export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam]: null)
) 


export const selectCollectionLoaded = createSelector(
    [selectShop],
    // loading   !!{} => true 
    shop => !!shop.collections
)