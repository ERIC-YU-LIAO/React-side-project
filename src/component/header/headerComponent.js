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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins ,faHouseUser} from '@fortawesome/free-solid-svg-icons'


const Header = () =>{
    const currentUser = useContext(Usercontext)
    const { hidden } = useContext(Cartcontext)

    return(
        <div className="header">
            <Link className="logo-container" to="/">
                SHOPGO衣網
            </Link>
            <div className="options">
            <Link className="option" to="/shop">
            
                <FontAwesomeIcon icon={faCoins} size="sm"> </FontAwesomeIcon>
               商店
             </Link>

             {/* 登入判斷 */}
                    { 
                    currentUser
                    ?

                (<div className='option' onClick={()=> auth.signOut()}>signOut</div> )
                    :
                    (<Link className='option'  to="/Signin">
                        <FontAwesomeIcon icon={faHouseUser} size="sm"> </FontAwesomeIcon>
                        登入</Link>)
                    }

            {/* <Link className="option" to="/shop">
                CONTACT
            </Link> */}
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