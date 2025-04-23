import './Host.css'
import { useParams, Link, NavLink, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function HostVanDetail(){
 let { id }= useParams();
 const [data, setData] = useState(null);
 useEffect(()=>{
   if(!id)return;
   fetch(`/api/vans/${id}`).then(res=>res.json()).then(jsn=>{setData(Array(jsn.vans));}).catch(e=>console.log(e))
 },[id])
 return(
   <>
   {data ?
    <div className="host-detail-grand">
     <Link style={{marginLeft:"20px",marginBlock:"10px",width:"100%"}} to=".." relative="path">←  Back to all vans</Link> 
     {data.map(v=>(
       <section key={v.id} className="host-van-detail">
         <section className="host-van-head">
           <img src={v.imageUrl} alt={v.name} />
           <section className="host-head-txt">
             <div style={{backgroundColor: v.type==="simple" ? "#DC7D5C" : v.type==="rugged" ? "#3E766A" : "#575554"}} className="vans-type">
               {v.type}
             </div>
             <h2>{v.name}</h2>
             <p style={{fontWeight:"bold"}}>${v.price}/day</p>
           </section>
         </section>
         <nav>
           <NavLink end className={({isActive})=>isActive ? "host-active" : null} to=".">Details</NavLink>
           <NavLink className={({isActive})=>isActive ? "host-active" : null} to="price">Pricing</NavLink>
           <NavLink className={({isActive})=>isActive ? "host-active" : null} to="photos">Photos</NavLink>
         </nav>
         <Outlet context={{...data}} />
       </section>
     ))}
     </div>
     : <h1>Loading...</h1>
   }
   </>
 )
}