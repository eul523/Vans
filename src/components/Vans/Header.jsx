import './Vans.css'
import { NavLink, Link } from 'react-router-dom'

export function Head(){
 return(
   <section className="head">
      <Link className="title" to="/">#VANLIFE</Link>
      <nav className="mnav">
        <NavLink className={({isActive})=>isActive ? "main-active" : null} to="/host">Host</NavLink>
        <NavLink className={({isActive})=>isActive ? "main-active" : null} to="/about">About</NavLink>
        <NavLink className={({isActive})=>isActive ? "main-active" : null} to="/vans">Vans</NavLink>
      </nav>
    </section>
 )
}

export function Foot(){
  return(
    <footer>
      <p>&copy; 2022 #VANLIFE</p>
    </footer>
  )
}