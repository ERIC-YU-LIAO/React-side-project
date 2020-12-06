import React , {useContext}from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import{selectCartItems,selectCartTotal} from '../redux/cart/cartSelector'
import '../checkoutPage/checkoutPage.scss'

import CheckoutItem from '../checkoutItem/checkoutItem'
import {Cartcontext} from '../../contextProvider/cartProvider'

const CheckoutPage = () =>{
    const {cartItems,cartCashTotal} = useContext(Cartcontext)
    
    return(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>product </span>
            </div>
            <div className="header-block">
                <span>Description </span>
            </div>
            <div className="header-block">
                <span>Quantity </span>
            </div>
            <div className="header-block">
                <span>Price </span>
            </div>
            <div className="header-block">
                <span>Remove </span>
            </div>
        </div>
        {cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
        }
        <div className="total">
            <span>total:${cartCashTotal}</span>
        </div>
    </div>
)
}
// const mapStateToProps = createStructuredSelector({
//     // cartItems:selectCartItems,
//     total:selectCartTotal
// })

// export default  connect(mapStateToProps)(CheckoutPage)

export default CheckoutPage