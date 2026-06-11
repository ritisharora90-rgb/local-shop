
import Hero from "../components/hero";
import Diary from "../components/diary";
import Navbar from "../components/navbar"

import Snacks from "../components/snacks";
import Pulses from "../components/pulses";
import Oneproduct from "../components/oneproduct";
import Cat from "../components/cat"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className="container-fluid p-0 ">

      <div className="container-fluid  p-0  ">
        
      <Navbar/>
      
       <Oneproduct/>

       <Hero/>

       <Cat/>

       <Diary />

       <Snacks/>

       <Pulses />
       <Diary/>
       <Snacks/>
       
       <Footer/>
       


      </div>
    </div>
   );
}
