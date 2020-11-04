import React from 'react'
import {Link} from 'react-router-dom'
import '../header/headerComponent.scss'

const Header = () =>{
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
            </div>
        </div>
    )
}
export default Header;