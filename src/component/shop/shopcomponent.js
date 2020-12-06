import React from 'react'

import {Route} from 'react-router-dom'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { fetchCollectionsStartAsync } from '../redux/shop/shopAction' // action 檔案的 這支function 取的非同步資料
import {selectCollectionLoaded,selectIsCollectionFetching} from '../redux/shop/shopSelector'
import WithSpinner from '../withHoc/withHoc.component'
import CollectionOverview from '../collectionOverview/collectionOverview'
import Collection from '../collection/collection'
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component{
    // state={
    //   loading:true
    // }
    // //沒訂閱
    // unsubscribeFromSnapshot = null

    componentDidMount() {
      const { fetchCollectionsStartAsync } = this.props;
      fetchCollectionsStartAsync();
    }


  //使用 firebase 的條件下取得data
  //   const {updateCollections} = this.props
  //   const collectionRef = firestore.collection('collection')
  //   console.log('collectionRefYAHA',collectionRef)
  // //promise get firebase data 
  //   collectionRef.get().then(snapshot=>{
  //     //collectionMap = store firebase data
  //     const collectionMap =  coverColletionsSnapshotToMap(snapshot)
  //    //call action put in data 
  //     updateCollections(collectionMap)
  //     console.log('collectionMap11',collectionMap)
  //     console.log('promise ',snapshot)
  //     this.setState({loading:false})
  //   })

      render(){
        const {match , iscollectionFetch,isselectCollectionLoaded} = this.props
        return (
          <div>
           <Route  exact  path={`${match.path}`}
                   render={props => (
                    <CollectionsOverviewWithSpinner isLoading={iscollectionFetch} {...props} />
                  )}/>
           <Route  exact path={`${match.path}/:collectionId`}  render={props => (
                    <CollectionPageWithSpinner isLoading={!isselectCollectionLoaded} {...props} />
                  )}/>
          </div>
        );
  
      }
}

// 創造新的 [] 裡面放的是抓取的資料
const mapStateToProps  = createStructuredSelector({
   iscollectionFetch: selectIsCollectionFetching,
   isselectCollectionLoaded :selectCollectionLoaded
})

// dispatch action to Shopreducer  
// action dispatch => 取的fetchCollectionsStartAsync() 去改變 state 
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});
// export default  connect(mapStateToProps,mapDispatchToProps)(ShopPage);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPage);