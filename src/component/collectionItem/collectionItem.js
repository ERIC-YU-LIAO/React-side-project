import React, {useContext } from 'react'
import '../collectionItem/collectionItem.scss'
import Button from '../button/button'
import {connect} from 'react-redux'
// import {addItem} from '../../component/redux/cart/cartAction'
import {Cartcontext} from '../../contextProvider/cartProvider'


const CollectionItem = ({item}) =>{
    const {name,price,imageUrl} = item
    const { addItem } = useContext(Cartcontext);
    // console.log('addItem',addItem)
    return (
        <div className="collection-item">
            <div className='image' style={{backgroundImage:`url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name"> {name}</span>
                <span className="price"> {price}</span>
            </div>
            <Button onClick={()=>addItem(item)}>ADD TO CART</Button>
        </div>
    )
}

//  action 條件下到 reducer 做改變再傳入store 在派發給元件
// const mapDispatchToProps = dispatch =>({
//     addItem: (item)=> dispatch(addItem(item))
// })
// export default connect(null,mapDispatchToProps)(collectionItem);


export default CollectionItem