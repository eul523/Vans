import './Vans.css'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function(){
 let {  id } = useParams();
 let [i, setI]=useState(null);
 useEffect(()=>{
  fetch(`/api/vans/${id}`).then(res=>res.json()).then(jsn=>{setI(jsn.vans);console.log(jsn)})
 },[id])
 return(
   <>
   {i ? 
      
      <section key={i.id} className="van-detail">
        <Link to="/vans">Back to vans page</Link>
        <img src={i.imageUrl} alt={i.name} />
        <div style={{backgroundColor: i.type==="simple" ? "#DC7D5C" : i.type==="rugged" ? "#3E766A" : "#575554"}} className="flexc vans-type">{i.type}</div>
        <h1>{i.name}</h1>
        <h2>${i.price}<span style={{fontWeight:"400",fontSize:"0.7rem"}}>/day</span></h2>
        <p>{i.description}</p>
        <button style={{backgroundColor: i.type==="simple" ? "#DC7D5C" : i.type==="rugged" ? "#3E766A" : "#575554"}} className="rent-btn">Rent this van</button>
      </section>
    
    : <h1>"loading"</h1>
   }
  </>
 )
}