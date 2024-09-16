import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home , Properties} from './pages'
import { NavBar,PropertyCard,Footer ,AuthOverlay} from './components'

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/properties' element={<Properties/>}/>
      </Routes>
      <Footer/>
      <AuthOverlay/>
    </Router>
  )
}

export default App
