import './Host.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function HostVans(){
 let [data, setData]=useState(null);
 useEffect(()=>{
   fetch("/api/host/vans").then(res=>res.json()).then(jsn=>setData(jsn.vans))
 },[])
 return(
   <section className="host-vans-grand">
   {data ?
    <>
     <h1>Your listed vans</h1>
     {data.map(v=>(
       <Link key={v.id} className="host-van" to={v.id}>
         <img src={v.imageUrl} alt={v.name} />
         <section className="host-van-txt">
           <h2>{v.name}</h2>
           <p>${v.price}/day</p>
         </section>
       </Link>
     ))}
    </>
   : <h1>Loading...</h1>}
  </section>
 )
}