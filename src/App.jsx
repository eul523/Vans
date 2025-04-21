import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Vans/Home"
import About from "./components/Vans/About"
import './App.css'

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
      </Routes>
      
    </BrowserRouter>

    </>
  )
}

export default App
