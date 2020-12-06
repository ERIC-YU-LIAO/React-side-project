// import SHOP_DATA from './shop.data'
import shopActionType from '../shop/shopType'

const INITIAL_STATE ={
    collections: null,
    isFetch: false,
    errorMessage: undefined,
    // collections: SHOP_DATA
};

const shopRducer = (state = INITIAL_STATE , action) =>{
    switch(action.type){
        case shopActionType.FETCH_COLLECTION_START:
            return{
                ...state,
                isFetch:true
            }
        case shopActionType.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                isFetch:false,
                collections: action.payload
            }
         case shopActionType.FETCH_COLLECTION_FAIL:
             return{
                 ...state,
                 isFetch: false,
                 errorMessage: action.payload
             }   
        default:
            return state;
    }
}

export default shopRducer