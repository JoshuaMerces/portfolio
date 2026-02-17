import { Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx"
import './App.css'
import Contact from "./pages/contact/contact.tsx";


function App() {
  return (
      <div className="app">
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
          </Routes>
      </div>
  )
}

export default App;
