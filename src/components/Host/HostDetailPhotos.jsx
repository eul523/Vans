import './Host.css'
import { useOutletContext } from 'react-router-dom'


export default function HostDD(){
 let { imageUrl }= useOutletContext();
 
 return(
      <>
   {img ?
        <img src={imageUrl} style={{width:"25%",height:"auto",borderRadius:"5px",marginBlock:"40px"}} />
     : <h1>Loading...</h1>
   }
  </>
 )
}