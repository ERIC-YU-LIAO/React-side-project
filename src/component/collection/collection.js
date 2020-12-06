import React, {useContext} from 'react'

import CollectionItem from '../collectionItem/collectionItem'
import {selectCollection} from '../redux/shop/shopSelector'
import{connect} from 'react-redux'

import '../collection/collection.scss'

import CollectionContext from '../../contextsAPI/collection/collections.content'


//match: 在每一個Route判斷到網址的路徑相符，要渲染該組件時都會將物件match給傳進該組件中
//Collection 是每個產品的 page
const Collection = ({match}) => {
    //useContext () 取得 CollectionContext DATA
    const collections  = useContext(CollectionContext)
    const collection = collections[match.params.collectionId]
    console.log('collectionid',collection)
    const {title,items} = collection

    return(
        <div className='collection-page'>
        <h2 className="title">{title}</h2>
            <div className="items">
                {
                items.map(item =>(
                    <CollectionItem key={item.id} item={item}/>
                ))
                }
            </div>
    </div>
    )

}



//ownProps:指的是該 component 本身所擁有的 props
// state: 則是指在 Redux store 中的所有資料
// const mapStateToProps = (state,ownProps) =>(
//     {
//         collection: selectCollection(ownProps.match.params.collectionId)(state)
//     }
// )

export default connect(null)(Collection)