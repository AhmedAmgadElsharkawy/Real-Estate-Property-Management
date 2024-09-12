import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home , Properties} from './pages'
import { NavBar,PropertyCard } from './components'

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/properties' element={<Properties/>}/>
      </Routes>
    </Router>
  )
}

export default App
