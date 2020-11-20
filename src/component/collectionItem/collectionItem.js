import React from 'react'
import '../collectionItem/collectionItem.scss'
import Button from '../button/button'

import {connect} from 'react-redux'
import {addItem} from '../../component/redux/cart/cartAction'

const collectionItem = ({item,addItem}) =>{
    const {id,name,price,imageUrl} = item
    return (
        <div className="collection-item">
            <div className='image' style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name"> {name}</span>
                <span className="price"> {price}</span>
            </div>
            <Button onClick={()=>addItem(item)}>CLICK</Button>
        </div>
    )
}

//  action 條件下到 reducer 做改變再傳入store 在派發給元件
const mapDispatchToProps = dispatch =>({
    addItem: (item)=> dispatch(addItem(item))
})


export default connect(null,mapDispatchToProps)(collectionItem);