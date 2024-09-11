import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from './pages'
import { NavBar,PropertyCard } from './components'

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
