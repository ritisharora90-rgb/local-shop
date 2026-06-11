"use client";

import { FaMapMarkerAlt, FaTelegramPlane,FaSmile, FaClock,FaEnvelope,FaPhone } from "react-icons/fa";



export default function Message() {
    return (
        <div className="container-fluid  p-3">
            <div className="container border-rounded d-flex flex-md-row flex-column justify-content-around" >
                <div className="m-3 p-3" style={{ border: "1px solid green", borderRadius: "15px" }}>
                    <h3>Contact Information</h3>
                    <div className="d-flex" style={{ borderBottom: "1px solid green" }}>
                        <div className="pt-1">
                            <FaMapMarkerAlt size={24} />
                        </div>
                        <div className=" p-0 ps-3 d-flex flex-column">
                            <h4>Address</h4>
                            <p>LocalShop HeadQuarter<br />
                                Jaipur ,Rajasthan</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2" style={{ borderBottom: "1px solid green" }}>
                        <div className="pt-2">
                            <FaPhone style={{ transform: "rotate(90deg)" }} size={24} />
                        </div>
                        <div className=" p-0 ps-3 d-flex flex-column">
                            <h4>Phone Number</h4>
                            <p> +91 9876543210</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2" style={{ borderBottom: "1px solid green" }}>
                        <div className="pt-1">
                            <FaEnvelope size={24} />
                        </div>
                        <div className=" p-0 ps-3 d-flex flex-column">
                            <h4>Email</h4>
                            <p>RitishArora@gmail.com</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2" style={{ borderBottom: "1px solid green" }}>
                        <div className="pt-1">
                            <FaClock size={24} />
                        </div>
                        <div className=" p-0 ps-3 d-flex flex-column">
                            <h4>Working hours</h4>
                            <p>Monday-saturday<br />
                                8:00AM to 8:00PM</p>
                        </div>
                    </div>
                    <div className="d-flex mt-2">
                        <div className="pt-1">
                            <FaSmile size={24} />
                        </div>
                        <div className=" p-0 ps-3 d-flex flex-column">
                            <h4>Satisfaction</h4>
                            <p>At LocalShop, customer satisfaction is our priority,<br /> Wheter you have questions about products, orders, <br />
                                deliveries, or becoming a partener store, our support<br /> team is ready to assist you.</p>
                        </div>
                    </div>


                </div>
                <div className=" m-3 p-3" style={{ border: "1px solid green", borderRadius: "15px" }}>
                    <h3>Send Us a Message</h3>
                    <div className="d-flex flex-row p-3 gap-3">
                        <input type="text" className="form-control" placeholder="Your Name" />
                        <input type="text" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="p-3 w-100 ">
                        <textarea className="form-control " rows="2" placeholder="Contact number" />
                        <textarea className="form-control mt-3" rows="4" placeholder="Subject" />
                        <textarea className="form-control mt-3" rows="6" placeholder="Write Your Message here !" />
                        <button className="bg bg-success w-100 mt-3 text-white " style={{ height: "40px" }}><FaTelegramPlane color="white" />  Send Message</button>
                    </div>


                </div>

            </div>
            <div className="container-fluid position-relative">
                <iframe
                    src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    
                ></iframe>

                <div
                    className="position-absolute   text-darke rounded"style={{top:"44%",left:"58%",border:"2px solid green"}}
                >
                    📍 LocalShop Main Branch
                </div>
            </div>
        </div>
    )
};