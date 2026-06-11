
import Allproduct from "./components/allproduct"
import Groceries from "./components/grocery"
import Pulses from "./components/pulses"
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function shops(){
    return(

        <div className="container-fluid p-0 ">

      <div className="container-fluid  p-0  ">
       <Navbar/>
        <Pulses/>
        <Groceries/>
        <Allproduct/>
        
        <Footer/>
        </div>
        </div>
     )};