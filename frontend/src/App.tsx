import { Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx"
import './App.css'
import Contact from "./pages/contact/contact.tsx";
import Links from "./pages/links/links.tsx";
import Work from "./pages/works/Work.tsx";


function App() {
  return (
      <div className="app">
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/links' element={<Links/>}/>
              <Route path='/works' element={<Work/>}/>
          </Routes>
      </div>
  )
}

export default App;
