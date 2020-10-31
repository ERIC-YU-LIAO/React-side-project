import logo from './logo.svg';
import './App.css';
import HomePage from './component/homepage/HomePage'
import {Route} from "react-router-dom";


const Hat =()=>{
  return <p>Hat</p>
}

const App = () =>{
  return (
    <div>
    <Route exact path="/" component={HomePage}/>
    <Route path="/mens" component={Hat}/>
    </div>
  )
}


export default App