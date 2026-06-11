'use client';

import { FaCheck } from "react-icons/fa";


export default function Neighbour() {
    return (

        <div className="neighbour container-fluid ">
            <div className="container p-3 text-center  "style={{background:"#c7f2ee",fontSize:"20px"}}>
                <h1>Your Neighborhood,Now on Online</h1>
                <p >An online marketplace that connects customers with nearby kirana stores — making grocery shopping faster, easier, and more convenient while supporting local shopkeepers.</p>
            </div>
            <div className='d-flex  flex-md-row flex-column justify-content-center align-items-center fw-bold g-5 ' style={{margin:"0px auto"}}>
                <div className=" m-5 " style={{borderRadius:"15px", backgroundColor:"lightgray",borderLeft:"7px solid #ffe430"}}>
                    <ul  className="list-unstyled m-3">
                        <h4 className='text-center'>What we offer</h4>
                        <li><FaCheck className="me-2 text-success" /> Browse products from nearby shops
                        </li>
                        <li> <FaCheck className="me-2 text-success" />Compare prices across stores
                        </li>
                        <li> <FaCheck className="me-2 text-success" />Online ordering & home delivery
                        </li>
                        <li> <FaCheck className="me-2 text-success" />Fresh grocery products
                        </li>
                        <li> <FaCheck className="me-2 text-success" />Multi-shop support
                        </li>
                        <li> <FaCheck className="me-2 text-success" />Secure checkout process
                        </li>
                    </ul>
                </div>
                 <div className="gx-5 m-5 " style={{borderRadius:"15px", backgroundColor:"lightgray",borderLeft:"7px solid #ffe430"}}>
                    <ul  className="list-unstyled m-3">
                        <h4 className='text-center'>Why choose us</h4>
                        <li><FaCheck className="me-2 text-success" />Support local businesses
                        </li>
                        <li><FaCheck className="me-2 text-success" />Faster delivery than large marketplaces
                        </li>
                        <li><FaCheck className="me-2 text-success" />Fresh & quality products
                        </li>
                        <li><FaCheck className="me-2 text-success" />Easy-to-use interface
                        </li>
                        <li><FaCheck className="me-2 text-success" />Trusted local vendors
                        </li>
                        <li><FaCheck className="me-2 text-success" />Competitive pricing
                        </li>
                    </ul>
                </div>

            </div>
            <div className='Ourmission d-flex flex-md-row flex-column   fw-bold  g-3 list-unstyled' style={{margin:"0px auto"}}>
                <div className="  gx-5 m-5 mt-2 " style={{borderRadius:"15px", backgroundColor:"lightgray", borderLeft:"7px solid #ffe430"}}>
                    <h3 className='m-3 text-center'>Our Vision</h3>
                    <p className='m-3'>Digitally empower local shopkeepers and help customers access daily essentials from trusted neighborhood stores with just a few clicks.</p>

                    </div>
                    <div className="gx-5 m-5  mt-2" style={{borderRadius:"15px", backgroundColor:"lightgray", borderLeft:"7px solid #ffe430"}}>
                        <h3 className='m-3 text-center'>Our mission</h3>
                        <p className='m-3'>Bridge the gap between local retailers and customers through technology, creating a convenient shopping experience for everyone.</p>
                    </div>
                </div>
                <div className="container p-3"style={{ background:"lightgray",borderRadius:"25px",fontSize:"20px"}}>
                    <h3 className="text-center">Customer Satisfaction</h3>
                    <p>Customer satisfaction is our top priority. We work closely with local vendors to ensure quality products, timely delivery, and excellent service. Every order is handled with care to provide the best shopping experience possible.</p>
                    <p> At LocalShop, customer happiness drives everything we do. We strive to offer fresh products, quick service, and a seamless shopping experience. By partnering with trusted local stores, we ensure quality, reliability, and convenience. Every customer is valued, and we continuously work to exceed expectations and build lasting relationships.</p>
                </div>

                <div className=" foursection d-flex flex-column justify-content-center align-items-center flex-md-row   gap-4   p-3 ">
                    <div className="d-flex gap-4 ">
                    <div className="p-4 stat-box" style={{background:"lightgray",borderRadius:"5px"}}>
                        <h1 className="fw-bold">500+</h1>
                        <p>Products</p>
                    </div>
                  <div className="p-4 stat-box" style={{background:"lightgray",borderRadius:"5px"}}>
                        <h1 className="fw-bold">50+</h1>
                        <p>Local Stors</p>
                    </div>
                    </div>
                    <div className="d-flex  flex-row gap-5 stat-box">
                  <div className="p-4" style={{background:"lightgray",borderRadius:"5px"}}>
                        <h1 className="fw-bold">24/7</h1>
                        <p>support</p>
                    </div>
                  <div className="p-4 stat-box" style={{background:"lightgray",borderRadius:"5px"}}>
                        <h1 className="fw-bold">1K+</h1>
                        <p>Happy Customer</p>
                    </div>
                    </div>


                </div>

        </div>

    )
}
