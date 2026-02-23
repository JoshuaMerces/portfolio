import { Route, Routes} from "react-router-dom";
import Home from "./pages/home/home.tsx";
import About from "./pages/about/about.tsx"
import './App.css'
import Contact from "./pages/contact/contact.tsx";
import Links from "./pages/links/links.tsx";
import Work from "./pages/works/Work.tsx";
import {useEffect} from "react";


function App() {
        useEffect(() => {
            const baseWidth = window.innerWidth;

            const applyZoom = () => {
                const zoom = window.innerWidth / baseWidth;
                document.body.style.zoom = String(zoom);
            };

            window.addEventListener("resize", applyZoom);
            return () => window.removeEventListener("resize", applyZoom);
        }, []);
    return (
      <div className="app">
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/links' element={<Links/>}/>
              <Route path='/work' element={<Work/>}/>
          </Routes>
      </div>
  )
}

export default App;
