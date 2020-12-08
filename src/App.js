import logo from './logo.svg';
import './App.css';
import React from 'react'
import HomePage from './component/homepage/HomePage'
import {Route,Switch,Redirect} from "react-router-dom";
import ShopPage from './component/shop/shopcomponent'
import Header from '../src/component/header/headerComponent'
import SigninPage from '../src/component/signinPage/signinPage'
import {auth,creatUserProfileDocument,addCollectionAndDocuments} from '../src/component/DataFirebase/firebase'
import CheckoutPage from '../src/component/checkoutPage/checkoutPage'
import Footer from '../src/component/footer/footer'
import {connect} from 'react-redux'
import {setCurrentUser} from '../src/component/redux/user/userAction'
import {selectCurrentUser} from './component/redux/user/userSelectors'
import {selectCollectionForPreview} from '../src/component/redux/shop/shopSelector'
import collection from './component/collection/collection';
import { createStructuredSelector } from 'reselect';
import Usercontext from './contextsAPI/current-user/user'

export class App extends React.Component{
    constructor(){
      super()
      this.state={
        currentUser:null,
        cartItem:null,
      }
    }

  unsubscribeFromAuth = null
//eror promblem 
  componentDidMount(){
    // const {setCurrentUser,collectionArray} = this.props
    // catch userAuth 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        //設定路徑 有 {displayName,email} data
        const userRef = await creatUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot =>{
            this.setState({currentUser:{id: snapShot.id,...snapShot.data()}
            }
              );
              console.log('state',this.state)
        })
      }
      this.setState({currentUser:userAuth})


      // addCollectionAndDocuments('collections',collectionArray)
      // map 推上去到firebase 使用addCollectionAndDocuments('KEY', [] DATA ) !! important 
      // addCollectionAndDocuments('collection',collectionArray.map(({title,items})=> ({title,items})))
      // this.setState({currentUser:user})
      // creatUserProfileDocument(user)
      }
    )
  
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Usercontext.Provider value={this.state.currentUser}>
        <Header/>
        </Usercontext.Provider>
    
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/Shop" component={ShopPage}/>
          <Route path="/checkoutpage" component={CheckoutPage} render={()=>this.state.cartItem = 0 ?(<Redirect to="/"/>):(<Redirect to="/"/>)}/>
          {/* <Route exact path="/Signin" render={ ()=> this.props.currentUser ? (<Redirect to='/'/>) : <SigninPage/>}/>
           */}
          <Route exact path="/Signin" render={ ()=> this.state.currentUser ? <Redirect to="/"/> : <SigninPage/>}/>
      </Switch>

      <Footer/>
      </div>
    )
  }

}


// redux 接受到 state 方式 用selector 去接資料
// const mapStateToProps = createStructuredSelector({
//   currentUser:selectCurrentUser,
//   collectionArray: selectCollectionForPreview
// })
// const mapDispatchToProps = dispatch =>({
//   setCurrentUser : user => dispatch(setCurrentUser(user))
// })
// export default connect(mapStateToProps,mapDispatchToProps)(App)

export default App