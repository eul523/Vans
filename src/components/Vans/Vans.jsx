import './Vans.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Vans(){
 let [data, setData]=useState(null);
 useEffect(()=>{
   fetch("/api/vans").then(res=>res.json()).then(jsn=>setData(jsn.vans))
 },[])
 return(
   <section className="vans-cont">
    <section className="vans-head">
      <h1>Explore our vans options</h1>
      <section className="vans-filters">
        <button>Simple</button>
        <button>Rugged</button>
        <button>Luxury</button>
        <button className="clear-filter">Clear filter</button>
      </section>
    </section>
  <section className="vans-sub">
  {data ? 
   data.map(i=>(
    <Link key={i.id} to={`/vans/${i.id}`}>
    <section key={i.id} className="vans">
       <img src={i.imageUrl} />
       <section className="vans-txt">
        <div className="nametype">
        <p className="vname">{i.name}</p>
        <div style={{backgroundColor: i.type==="simple" ? "#DC7D5C" : i.type==="rugged" ? "#3E766A" : "#575554"}} className="flexc vans-type">{i.type}</div>
        </div>
        <p className="vprice">${i.price}<br/><span>/day</span></p>
       </section>
       
     </section>
     </Link>
   )) : "loading"
  }
  </section>
  </section>
 )
}