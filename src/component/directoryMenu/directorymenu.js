import React, { Component } from 'react'
import MenuItem from '../menuitem/menuItem'
import '../directoryMenu/directorymenu.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../redux/directory/directorySeletor'

const Directorymenu = ({sections}) =>{
      return(
            <div className='directory-menu'>
                {sections.map(({title,id,imageUrl,size,linkUrl}) =>{
                    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                })}
            </div>   
        )
        
}

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySections
  })
export default connect(mapStateToProps)(Directorymenu)