import shopActionType from '../shop/shopType'
import {firestore,coverColletionsSnapshotToMap} from '../../DataFirebase/firebase'

export const fetchCollectionsStart = () => ({
    type: shopActionType.FETCH_COLLECTION_START,
})

export const fetchCollectionFail = (errorMessage) =>({
    type: shopActionType.FETCH_COLLECTION_FAIL,
    paylaod: errorMessage
})


export const fetchCollectionsSuccess = collectionMap =>({
    type: shopActionType.FETCH_COLLECTION_SUCCESS,  
    payload: collectionMap  // firebase data 以取的 collectionMap data 
});

// promise 取的資料
export const fetchCollectionsStartAsync = () =>{
    return dispatch => {
        const collectionRef = firestore.collection('collection')
        dispatch(fetchCollectionsStart()) // data = null 
      //promise get firebase data 
        collectionRef.get().then(snapshot=>{
            //coverColletionsSnapshotToMap = 從firebase 取的資料 funciton()
        const collectionMap =  coverColletionsSnapshotToMap(snapshot)
         //call action put in data 
            dispatch(fetchCollectionsSuccess(collectionMap))
            // this.setState({loading:false})
            console.log('collectionMap11' , collectionMap)
        }).catch(error =>dispatch(fetchCollectionFail(error)))
    }
}
