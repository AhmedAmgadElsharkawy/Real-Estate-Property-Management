import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home , Properties,PropertyDetails, Reviews} from './pages'
import { NavBar,Footer} from './components'
import data from "./pages/Properties/temporaryData.json"

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/property-details' element={<PropertyDetails property={data[0]}/>}/>
        <Route path='/reviews' element = {<Reviews/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
