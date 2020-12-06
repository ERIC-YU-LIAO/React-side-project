import React from 'react'
import '../collectionOverview/collectionOverview.scss'
import PreviewCollection from '../previewCollection/previewCollection'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionForPreview} from '../redux/shop/shopSelector'

const CollectionOverview = ({collections}) =>(
    <div className="">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollectionForPreview
  })

export default connect(mapStateToProps)(CollectionOverview)