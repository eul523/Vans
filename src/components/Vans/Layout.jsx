import './Vans.css'
import { Outlet } from 'react-router-dom'
import {Head,Foot} from './Header'

export default function Layout(){
 return(
  <div>
   <Head />
   <Outlet />
   <Foot />
 </div>
 )
}