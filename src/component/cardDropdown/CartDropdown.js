import React, { useContext } from 'react'
import {connect} from 'react-redux'

import {withRouter} from 'react-router-dom';
import Button from '../button/button'
import '../cardDropdown/CartDropdown.scss'
import CartItem from '../cartItem/cartItem'
import {toggleCartHidden} from '../redux/cart/cartAction'
import {Cartcontext} from '../../contextProvider/cartProvider'


const CartDropdown = ({history}) =>{
    const {cartItems} = useContext(Cartcontext)
    return   (
        <div className='cart-dropdown'>
             <div className="cart-items">
             {
                cartItems.length ? ( cartItems.map(cartItem => (<CartItem  key={cartItem.id} item={cartItem}/>))):(<p>it is nothing</p>)   
             }
                <Button onClick={()=> { history.push('/checkoutpage');toggleCartHidden() } }>Check</Button>
             </div>
        </div>
    )
}

const mapStateToProps = ({cart:{cartItems}}) =>({
    cartItems
})

export default  withRouter(connect(mapStateToProps)(CartDropdown))