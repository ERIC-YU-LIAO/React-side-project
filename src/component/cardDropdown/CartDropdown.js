import React from 'react'
import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom';
import Button from '../button/button'
import '../cardDropdown/CartDropdown.scss'
import CartItem from '../cartItem/cartItem'
import {toggleCartHidden} from '../redux/cart/cartAction'


const CartDropdown = ({cartItems,history,dispatch}) =>{
    return   (
        <div className='cart-dropdown'>
             <div className="cart-items">
             {
                cartItems.length ? ( cartItems.map(cartItem => (<CartItem  key={cartItem.id} item={cartItem}/>))):(<p>it is nothing</p>)   
             }
                <Button onClick={()=> { history.push('/checkoutpage');dispatch(toggleCartHidden()) } }>Check</Button>
             </div>
        </div>
    )
}

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})

export default  withRouter(connect(mapStateToProps)(CartDropdown))