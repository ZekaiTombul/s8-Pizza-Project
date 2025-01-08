
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
import ErrorPage from './Components/ErrorPage'
import {pizza} from './Components/data'
import Success from './Components/Success'
import Order from './Components/Order/Order'

function App() {
  

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home /> 
        </Route>
        <Route path="/order">
          <Order pizza={pizza} /> 
        </Route>
        <Route path="/success">
          <Success /> 
        </Route>
        <Route path="*">
          <ErrorPage /> 
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App
