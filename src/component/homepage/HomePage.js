import React from 'react'
import '../homepage/homepage.scss'
import Directorymenu from '../directoryMenu/directorymenu'


const HomePage = () =>{
   return   (  <div className='homepage'>
            <div className='directory-menu'>
                   <Directorymenu/>
            </div>
        </div>
          )
}


export default HomePage