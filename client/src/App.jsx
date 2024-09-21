import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home , Properties,PropertyDetails} from './pages'
import { NavBar,Footer} from './components'
import data from "./pages/Properties/temporaryData.json"
import Slider from './components/slider/slider'

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/property-details' element={<PropertyDetails property={data[0]}/>}/>
      </Routes>
      <Footer/>
      <Slider/>
    </Router>
  )
}

export default App
