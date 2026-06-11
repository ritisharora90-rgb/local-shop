import Navbar from "../../components/navbar";

import Message from "./components/message";
import Howtoconnect from "./components/howtoconnect";
import Clinks from "./components/links";
import Footer from "../../components/footer";
export default function Contact(){
    return(
          <div className="container-fluid p-0 ">

      <div className="container-fluid  p-0  ">
        <Navbar/>
     
      <Message/>
      <Howtoconnect/>
      <Clinks/>

      <Footer/>
       
        </div>
      </div>
    )
}