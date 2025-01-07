
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import Footer from './Components/Footer/Footer'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'

function App() {
  

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact><Home /> </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
