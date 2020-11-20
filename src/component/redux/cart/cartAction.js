import { cartType } from '../cart/cartType'


export const toggleCartHidden =  () =>({
        type : cartType.TOOGLE_CART      
})

// 包function 餐數 包 item
export const addItem = (item) =>({
    type : cartType.ADDITEM,
    payload: item // 改變item值
})

export const clearItemFromCart = item =>({
    type:cartType.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItem = item =>({
    type:cartType.REMOVE_ITEM,
    payload:item
})

