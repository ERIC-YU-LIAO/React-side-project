import React from 'react'

import '../button/button.scss'


const Button = ({children, isGoogleSignIn,inverted ,...otherProps})=>{
    return (
        <button className= {`
        ${inverted ? 'inverted' : ''} 
        ${isGoogleSignIn ? 'google-sing-in' : ''} custom-button `} {...otherProps}>
        {children}
        </button>
    )
}

export default Button