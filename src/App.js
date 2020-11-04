import logo from './logo.svg';
import './App.css';
import HomePage from './component/homepage/HomePage'
import {Route,Switch} from "react-router-dom";
import ShopPage from './component/shop/shopcomponent'
import Header from '../src/component/header/headerComponent'

const App = () =>{
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/Shop" component={ShopPage}/>
    </Switch>
    </div>
  )
}


export default App