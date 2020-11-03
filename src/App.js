import logo from './logo.svg';
import './App.css';
import HomePage from './component/homepage/HomePage'
import {Route} from "react-router-dom";
import ShopPage from './component/shop/shopcomponent'


const App = () =>{
  return (
    <div>
    <Route exact path="/" component={HomePage}/>
    <Route path="/Shop" component={ShopPage}/>
    </div>
  )
}


export default App