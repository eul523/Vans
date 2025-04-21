import './Vans.css'

export default function About(){
 return(
   <section className="about flexc">
     <img src="/images/about-hero.png" alt="hero" />
     <div className="abouttxt">
     <h2>Don't squeeze in a sedan when you can relax in a van.</h2>
     <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before every trip to ensure your travel plans go off without a hitch.</p>
     <p>Our team is full of vanlife enthuasists who knows firsthand the magic of touring the world in four wheels.</p>
     <section className="explore flexc">
       <h2>Your destination is ready, your van is waiting.</h2>
       <button>Explore your vans</button>
     </section>
     </div>
     <p className="foot">&copy; 2022 #vanlife</p>
   </section>
 )
}