import React from 'react'
import CollectionItem from '../collectionItem/collectionItem';
import {connect} from 'react-redux'


import '../previewCollection/previewCollection.scss'
import Directorymenu from '../directoryMenu/directorymenu'
import {selectDirectorySections} from '../redux/directory/directorySeletor'
import {createStructuredSelector} from 'reselect'
import MenuItem from '../menuitem/menuItem'
import { withRouter } from "react-router";

const PreviewCollection = ({title,items,history,match,linkUrl})=>{
  return(
    <div className="collection-preview">

        <h1 className="title"> {title} </h1>
        <div className="preview">
        {
            items
            .filter((item,idx) => idx < 5)
            .map((item)=>(
              //  <div key={item.id}> {item.name} </div>
              <CollectionItem key={item.id} item={item}/>
            ))
        }
        </div>
    </div>

  ) 
}

// const mapStateToProps = createStructuredSelector({
//   sections:selectDirectorySections
// })

export default withRouter(PreviewCollection)