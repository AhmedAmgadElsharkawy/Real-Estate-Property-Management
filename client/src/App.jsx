import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home,Blog } from './pages'
import { NavBar } from './components'

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
    </Router>
  )
}

export default App
