import React , {useContext,useState} from 'react'
import {Link} from 'react-router-dom'
import '../header/headerComponent.scss'
import {auth} from '../DataFirebase/firebase'
import CardIcon from '../cardIcon/cardIconComponent'
import CartDropdown from '../cardDropdown/CartDropdown'

import {connect} from 'react-redux'
import Usercontext from '../../contextsAPI/current-user/user'
// import Cartcontext from '../../contextsAPI/cart/cart'
import {Cartcontext} from '../../contextProvider/cartProvider'


const Header = () =>{
    const currentUser = useContext(Usercontext)
    const { hidden } = useContext(Cartcontext)

    return(
        <div className="header">
            <Link className="logo-container" to="/">
                CLOTH.COM
            </Link>

            <div className="options">
            <Link className="logo-container" to="/shop">
               SHOP
             </Link>
            <Link className="logo-container" to="/shop">
                CONTACT
            </Link>
            { 
            currentUser
            ?
           (<div className='option' onClick={()=> auth.signOut()}>signOut</div>)
            :
            (<Link className='option'  to="/Signin">Signin</Link>)
            }
            <CardIcon/>
            </div>
                {hidden ? null : <CartDropdown/>}
        </div>
    )
}
// user:{currentUser},
// const mapStateToProps =  ({ cart:{hidden}}) =>({
//     // currentUser,
//     hidden,
// })

// export default connect(mapStateToProps)(Header);

export default Header