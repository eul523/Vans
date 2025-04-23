import './Host.css'
import { useOutletContext } from 'react-router-dom'


export default function HostDD(){
 let { price }= useOutletContext();
 
 return(
      <>
   {price ?
     
      <h2 style={{fontWenght:"bold",fontSize:"30px",marginBlock:"40px",textAlign:"center"}} >${price}/day</h2>
     : <h1>Loading...</h1>
   }
  </>
 )
}