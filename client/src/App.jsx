import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Account, Home , Properties,PropertyDetails, Reviews} from './pages'
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
        <Route path='/account' element = {<Account/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
