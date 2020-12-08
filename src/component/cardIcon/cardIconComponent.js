import React,{useContext} from 'react'

import {ReactComponent as Icon} from '../../assest/shopping-bag.svg'
import '../cardIcon/cardIconComponent.scss'
// import { toggleCartHidden } from '../../component/redux/cart/cartAction'

import {connect} from 'react-redux'
import {Cartcontext} from '../../contextProvider/cartProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
const CardIcon = ({itemCount}) => {
    const {togglehidden,cartItemcount} = useContext(Cartcontext)
 return (  
    <div className="cart-icon" onClick={togglehidden}>
        <div>
        <FontAwesomeIcon icon={faCartArrowDown} className="cart" size='1x'></FontAwesomeIcon>
        </div>
         <span className="item-count"> {cartItemcount}</span>
    </div>
        )
}


const mapStateToProps = ({cart:{cartItems}}) =>{
    console.log('I am be called')
    return({
    itemCount: cartItems.reduce((accmulatedQuantity, cartItems)=>accmulatedQuantity+cartItems.quantity,0)
})}
// const mapDispatch = dispatch =>({
//     toggleCartHidden: ()=> dispatch(toggleCartHidden())
// })
export default connect(mapStateToProps)(CardIcon)



