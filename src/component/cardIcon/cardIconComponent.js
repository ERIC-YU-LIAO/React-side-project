import React from 'react'

import {ReactComponent as Icon} from '../../assest/shopping-bag.svg'
import '../cardIcon/cardIconComponent.scss'
import { toggleCartHidden } from '../../component/redux/cart/cartAction'

import {connect} from 'react-redux'
const CardIcon = ({toggleCartHidden,itemCount}) => {
 return (  
    <div className="cart-icon" onClick={toggleCartHidden}>
        <Icon className="shopping-icon"/>
        <span className="item-count"> {itemCount}</span>
    </div>
        )
}

const mapDispatch = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
const mapStateToProps = ({cart:{cartItems}}) =>{
    console.log('I am be called')
    return({
    itemCount: cartItems.reduce((accmulatedQuantity, cartItems)=>accmulatedQuantity+cartItems.quantity,0)
})}


export default connect(mapStateToProps,mapDispatch)(CardIcon)