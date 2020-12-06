// import cartItem from '../component/cartItem/cartItem';

// function 作用


export const addItemTocart = (cartItems,cartItemsToAdd) => {
        // 宣告 item have id property = cartItmes.find() 去找 cartItem.id === cartItemToAdd
        const existingCartItem = cartItems.find(
            cartItem => cartItem.id === cartItemsToAdd.id
        );
        // 如果 id 都相等
        if(existingCartItem){
            //map 新增 new[] 去渲染 quantity 必須＋1
            return cartItems.map(
                cartItem => cartItem.id === cartItemsToAdd.id 
                ? {...cartItem, quantity: cartItem.quantity +1 }
                : cartItem
                )  
        }
        // 回傳 
        return [...cartItems,{...cartItemsToAdd,quantity:1}]
}

export const removeItemFromCart = (cartItems,cartItemToRemove)=>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id    
                        ? { ...cartItem, quantity:cartItem.quantity -1}
                        : cartItem)
}


export const clearItemFromCart = (cartItems, item )=>
 (cartItems.filter( cardItem=> cardItem.id !== item.id ))




export const getItemIconQuntity = (cartItems)=>
(    cartItems.reduce((accumalateQuqnantity,cartItem)=>
    accumalateQuqnantity + cartItem.quantity,0)
    
)

export const getCartcashTotal = (cartItems)=>
    cartItems.reduce((accumalateQuqnantity,cartItem)=>
    accumalateQuqnantity + cartItem.quantity * cartItem.price,0 
    )

export const getCartLocalStroge = (cartItems)=>
JSON.parse(localStorage.getItem(cartItems))


