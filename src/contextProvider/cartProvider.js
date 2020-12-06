//  import Hook and contextAPI
import {createContext, useState, useEffect, useReducer} from 'react'
import {addItemTocart,removeItemFromCart,clearItemFromCart,getItemIconQuntity,getCartcashTotal,getCartLocalStroge} from './cart.utils'
// import cartReducer from '../../src/component/redux/cart/cartReducer'

export const Cartcontext = createContext({
    hidden: true,
    toggleHidden:() =>{},
    cartItems:[],
    // cartItems: JSON.parse(localStorage.getItem('cartItems'))|| [],
    addItem:() =>{},
    removeItem: ()=>{},
    clearItem : ()=>{},
    cartItemcount: 0, 
    cartCashTotal:1,
})


export const CartProvider = ({children}) =>{
    const [hidden,sethidden] = useState(true)
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems'))||[]);
    const [cartItemcount, setcartItemcount] = useState(0)
    const [cartCashTotal, setcartCashTotal] = useState(0)
    const addItem = item => setCartItems(addItemTocart(cartItems,item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems,item));
    const clearItem = item => setCartItems(clearItemFromCart(cartItems,item))
    const togglehidden = () => sethidden(!hidden)

    // render 後做事此getItemIconQuntity() function 在執行累加動作
    useEffect(()=>{
        setcartItemcount(getItemIconQuntity(cartItems))
        setcartCashTotal(getCartcashTotal(cartItems))
        localStorage.setItem('cartItems',JSON.stringify(cartItems))
    },[cartItems]);
    return <Cartcontext.Provider value={{hidden,cartItems:cartItems,cartItemcount,addItem,togglehidden,removeItem,clearItem,cartCashTotal}}> {children}</Cartcontext.Provider>
}



