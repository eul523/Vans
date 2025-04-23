import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./components/Vans/Home"
import About from "./components/Vans/About"
import './App.css'
import Vans from './components/Vans/Vans'
import VanDetail from './components/Vans/VanDetail'
import Layout from './components/Vans/Layout'
import Dashboard from './components/Host/Dashboard'
import Income from './components/Host/Income'
import Reviews from './components/Host/Reviews'
import HostLayout from './components/Host/HostLayout'
import HostVans from './components/Host/HostVans'
import HostVanDetail from './components/Host/HostVanDetail'
import HostDD from './components/Host/HostDetailDetails'
import HostDetailPrice from './components/Host/HostDetailPrice'
import HostDetailPhotos from './components/Host/HostDetailPhotos'


function App() {
  return (
  <section className="site-wrapper">
  <BrowserRouter>
      <Routes>
       <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans">
          <Route index element={<Vans />} />
          <Route path=":id" element={<VanDetail />} />
        </Route>
        
        <Route path="host" element={<HostLayout />}>
       <Route index element={<Dashboard />} />
       <Route path="income" element={<Income />} />
       <Route path="reviews" element={<Reviews />} />
       <Route path="vans" element={<HostVans />} />
       <Route path="vans/:id" element={<HostVanDetail />}>
         <Route index element={<HostDD />} />
         <Route path="price" element={<HostDetailPrice />} />
         <Route path="photos" element={<HostDetailPhotos />} />
       </Route>
       </Route>
       </Route>
       
      </Routes>
      
    </BrowserRouter>
    
    </section>
  )
}

export default App
