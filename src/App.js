import logo from './logo.svg';
import './App.css';
import React from 'react'
import HomePage from './component/homepage/HomePage'
import {Route,Switch,Redirect} from "react-router-dom";
import ShopPage from './component/shop/shopcomponent'
import Header from '../src/component/header/headerComponent'
import SigninPage from '../src/component/signinPage/signinPage'
import {auth,creatUserProfileDocument} from '../src/component/DataFirebase/firebase'
import CheckoutPage from '../src/component/checkoutPage/checkoutPage'

import {connect} from 'react-redux'
import {setCurrentUser} from '../src/component/redux/user/userAction'

export class App extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
  //     currentUser: null,
  //   }
  // }
  unsubscribeFromAuth = null

//eror promblem 
  componentDidMount(){
    const {setCurrentUser} = this.props
    // catch userAuth 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        //設定路徑 有 {displayName,email} data
        const userRef = await creatUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot =>{
           setCurrentUser(
              {
                  id: snapShot.id,
                  ...snapShot.data()
              });
              console.log('state',this.state)

        })
      }
      
      setCurrentUser(userAuth)
      // this.setState({currentUser:user})
      // creatUserProfileDocument(user)
      // console.log(user);
      }
    )
  
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/Shop" component={ShopPage}/>
          <Route path="/checkoutpage" component={CheckoutPage}/>
          <Route exact path="/Signin" render={ ()=> this.props.currentUser ? (<Redirect to='/'/>) : <SigninPage/>}/>
      </Switch>
      </div>
    )
  }

}


const mapStateToProps = ({user}) =>({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps )(App)