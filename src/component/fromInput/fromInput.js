import React, { Component } from 'react'

import '../fromInput/fromInpu.scss'


const Frominput =({inputChange, label, ...otherProps})=>{
    return(
        <div className="group">
            <input onChange={inputChange} className="form-input" {...otherProps}/>
            {
            label?
            (<label className={`${otherProps.value.length > 0? "shrink" :'' } form-input-label`}> 
            {label}
            </label>)
            :null
            }

        </div>
    )
}

export default Frominput