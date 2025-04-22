import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Vans/Home"
import About from "./components/Vans/About"
import './App.css'
import Vans from './components/Vans/Vans'
import VanDetail from './components/Vans/VanDetail'

function App() {
  return (
  <>
  <BrowserRouter>
    <section className="head">
      <Link className="title" to="/">#VANLIFE</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </section>
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      
    </BrowserRouter>
    <footer>
      <p>&copy; 2022 #VANLIFE</p>
    </footer>
    </>
  )
}

export default App
