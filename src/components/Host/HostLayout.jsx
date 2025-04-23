import './Host.css'

import { NavLink, Outlet } from 'react-router-dom'

export default function HostLayout(){
 return(
   <div className="host-wrapper">
   <nav className="host-nav">
     <NavLink end className={({isActive})=>isActive ? "host-active" : null} to=".">Dashboard</NavLink>
     <NavLink className={({isActive})=>isActive ? "host-active" : null} to="income">Income</NavLink>
     <NavLink className={({isActive})=>isActive ? "host-active" : null} to="vans">Vans</NavLink>
     <NavLink className={({isActive})=>isActive ? "host-active" : null} to="reviews">Reviews</NavLink>
   </nav>
   <Outlet />
   </div>
 )
}