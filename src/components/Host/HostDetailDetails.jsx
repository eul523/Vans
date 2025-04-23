import './Host.css'
import { useParams, useOutletContext } from 'react-router-dom'

export default function HostDD(){
 let { name, price, description,type, id }= useOutletContext();
 
 return(
   <div className="host-deep-cont">
   {name ?
      <section key={id} className="host-detail-ins">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Category:</strong> {type}</p>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Visibility:</strong> Public</p>
      </section>
      : <h1>Loading...</h1>
   }
  </div>
 )
}