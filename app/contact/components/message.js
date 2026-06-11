"use client";
import Image from "next/image";

export default function Message(){
    return(
        <div className="container p-3">
            <div className="container border-rounded d-flex flex-md-row flex-column  justify-content-between align-items-center" style={{border:"1px solid green",borderRadius:"25px"}}>
                <div className="p-3">
            <Image
            src="/message.png"
            alt="message"
            width={170}
            height={170}
              />
              </div>
              <div className=" d-flex flex-column justify-content-center align-items-center text-center">
                <h1 >
                    Contect Us</h1>
                    <h6>We are here to help! Reach out to us for any questions, feedback, or support</h6>
              </div>
              <div>
                  <div>
            <Image
            src="/head.jpg"
            alt="message"
            width={200}
            height={200}
              />
              </div>
              </div>
              
        </div>
        </div>
      
    )
}