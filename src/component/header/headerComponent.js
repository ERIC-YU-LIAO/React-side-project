import React from 'react'
import {Link} from 'react-router-dom'
import '../header/headerComponent.scss'
import {auth} from '../DataFirebase/firebase'

const Header = ({currentUser}) =>{
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
           <div className='option' onClick={()=> auth.signOut()}>signOut</div>
            :
            <Link className='option'  to="/Signin">Signin</Link>
            }
            </div>
        </div>
    )
}
export default Header;