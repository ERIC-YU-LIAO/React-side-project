import React from 'react'
import '../menuitem/menuitem.scss'


const MenuItem = ({id,title,imageUrl} ) =>{
    return(
    <div style={{
         backgroundImage: `url( ${imageUrl})` }}
         className='menu-item'>
        <div className='content'>
            <h1 className="title"> {title}</h1>
            <span className="subtitle"> {id}</span>
        </div>
    </div>
   
    )
}

export default MenuItem