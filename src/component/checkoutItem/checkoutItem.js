import React, {useContext} from 'react'
import {connect} from 'react-redux'
import CartItem from '../cartItem/cartItem'
import '../checkoutItem/checkoutItem.scss'
// import {clearItemFromCart,removeItem,addItem} from '../redux/cart/cartAction'
import {Cartcontext} from '../../contextProvider/cartProvider'


const CheckoutItem = ({cartItem}) =>{
    const {name,imageUrl,price,quantity} = cartItem
    const {removeItem, addItem, clearItem} = useContext(Cartcontext)
return(    
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
        <div className="arrow" onClick={()=>removeItem(cartItem) }>	&#10094;</div>
        
           <div className="value">{quantity}</div>
            
        <div className="arrow" onClick={()=>addItem(cartItem) }>	&#10095;</div>
        </span>
        <span className="price"> ${price}</span>
        <span className="remove-button" onClick={()=> clearItem(cartItem)}>&#10005;</span>
    </div>)
}

// const mapDispatchToProps = dispatch => ({
//     clearItem : item =>dispatch(clearItemFromCart(item)),
//     addItem: item =>dispatch(addItem(item)),
//     removeItem: item=>dispatch(removeItem(item))
// })

// export default connect(null,mapDispatchToProps)(CheckoutItem)

export default CheckoutItem
