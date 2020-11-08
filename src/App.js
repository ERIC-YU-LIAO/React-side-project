import logo from './logo.svg';
import './App.css';
import React from 'react'
import HomePage from './component/homepage/HomePage'
import {Route,Switch} from "react-router-dom";
import ShopPage from './component/shop/shopcomponent'
import Header from '../src/component/header/headerComponent'
import SigninPage from '../src/component/signinPage/signinPage'
import {auth} from '../src/component/DataFirebase/firebase'
import { Component } from 'react';

export class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

//eror promblem 
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>(
      this.setState({currentUser:user})
    ))
      
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/Shop" component={ShopPage}/>
          <Route path="/Signin" component={SigninPage}/>
      </Switch>
      </div>
    )
  }

}


export default App