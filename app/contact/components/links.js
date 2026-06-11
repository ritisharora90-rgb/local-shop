"use client";

import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Message() {
    return (

         <div className="container-fluid p-3">
            <div className=" d-flex flex-column justify-content-center align-items-center ">
                <h4>Connect With Us</h4>
                <div className="d-flex justify-content-center gap-3 pt-4">
                    <div><div className="ps-4"><FaWhatsapp size="30px"/></div><h4>Whatsapp</h4></div>
                    <div><div className="ps-4"><FaInstagram size="30px"/></div><h4>Instagram</h4></div>
                 <div>   <div className="ps-4"><FaFacebook size="30px"/></div><h4>Facebook</h4></div>
                  <div>  <div className="ps-4"><FaTwitter size="30px"/></div> <h4>Twitter/X</h4></div>

                    </div>
                
                </div>
            </div>
    )};