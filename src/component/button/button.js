import React from 'react'

import '../button/button.scss'


const Button = ({children, isGoogleSignIn ,...otherProps})=>{
    return (
        <button className= {`${isGoogleSignIn ? 'google-sing-in' : ''} custom-button `} {...otherProps}>
        {children}
        </button>
    )
}

export default Button