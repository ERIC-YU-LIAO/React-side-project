//增加 陣列中 數量 屬性
import {addItemTocart,removeItemFromCart} from '../cart/cart.utils'
import {cartType} from '../cart/cartType'

// state 初始值
const  INITAL_STATE = {
    hidden : true,
    cartItems:[]
}

const cartReducer = (state= INITAL_STATE  ,action) =>{
    switch(action.type){
        //判斷
        case 'TOOGLE_CART':
        return{
            ...state,
            //改變後為 false
            hidden: !state.hidden
        }
        //新增item 
        case 'ADD_ITEM':
        return{
            ...state,
            cartItems: addItemTocart(state.cartItems, action.payload),
        }
        //clear item 
        case cartType.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(
                cardItem=> cardItem.id !== action.payload.id
                )
            }
        case cartType.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemFromCart(state.cartItems,action.payload)
            }
        default:
            return state
    }
}


export default cartReducer