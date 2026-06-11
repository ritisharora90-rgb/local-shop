
import Shops from "./components/shops";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer"

export default function shops(){
    return(

        <div className="container-fluid p-0 ">

      <div className="container-fluid  p-0  ">
        
        <Navbar/>
        
        <Shops/>
        <div  className="mt-5" >
        <Footer/>
        </div>
        </div>
        </div>
    )
}

