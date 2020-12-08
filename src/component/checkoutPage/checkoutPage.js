import React , {useContext}from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import{selectCartItems,selectCartTotal} from '../redux/cart/cartSelector'
import '../checkoutPage/checkoutPage.scss'

import Button from '../button/button' 
import {Link} from 'react-router-dom'
import CheckoutItem from '../checkoutItem/checkoutItem'
import {Cartcontext} from '../../contextProvider/cartProvider'

const CheckoutPage = () =>{
    const {cartItems,cartCashTotal,payItem} = useContext(Cartcontext)
    
    return(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span> </span>
            </div>
            <div className="header-block">
                <span>商品詳情 </span>
            </div>
            <div className="header-block">
                <span>數量 </span>
            </div>
            <div className="header-block">
                <span>價格 </span>
            </div>
            <div className="header-block">
                <span>刪除 </span>
            </div>
        </div>
        {cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))}
        <div className="total">
            <span>Total:  {cartCashTotal}</span>
        </div>
        <div>
        <Button onClick={()=>payItem()}>付款</Button>
      
        <Link className="logo-container" to="/">
                     <Button>返回購物</Button>
            </Link>
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