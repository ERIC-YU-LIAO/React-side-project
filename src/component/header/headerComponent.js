import React from 'react'
import {Link} from 'react-router-dom'
import '../header/headerComponent.scss'
import {auth} from '../DataFirebase/firebase'
import CardIcon from '../cardIcon/cardIconComponent'
import CartDropdown from '../cardDropdown/CartDropdown'

import {connect} from 'react-redux'

const Header = ({currentUser,hidden}) =>{
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
            {
                hidden ? null : <CartDropdown/>
                /* <CartDropdown/> */
            }
        
        </div>
    )
}

const mapStateToProps =  ({user:{currentUser}, cart:{hidden}}) =>({
    currentUser,
    hidden,
})

export default connect(mapStateToProps)(Header);