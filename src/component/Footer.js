import React from 'react'
import { BsWhatsapp, BsFacebook, BsInstagram, BsTwitter, BsEnvelope, BsTelephoneForward, BsGeoAlt } from "react-icons/bs";
import mmclolofooter from '../images/Map-My-Crop----Logo-JPG-copy 1.png'

import Facebook from '../images/Rectangle 4.png'
import Instagram from '../images/Rectangle 5.png'
import Twitter from '../images/Rectangle 6.png'
import Envelope from '../images/Rectangle 7.png'
import Gplay from '../images/image 4.png'
import AppStore from '../images/image 5.png'
function Footer() {
  return (
    <>
      <footer className="text-white text-center text-lg-start mt-4" style={{ backgroundColor: "#024002" }} >

        {/* <!-- Grid container -->
        <div className="container p-4">
          <!--Grid row-->
          <div className="row">
            <!--Grid column-->
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
              <div className="text-uppercase">
                <img src={mmclolofooter} style={{ width: "79px", height: "81px" }} />
              </div>
              <p className='mt-3'>
                B-10 Hive, The Mills at RBCC, Raja Bahadur Mill
                Rd, Behind Sheraton Grand Hotel,
                Sangamvadi, Pun, Maharashtra 411001
              </p>
              <form>
                <div className='d-flex w-75'>
                <input type="text" placeholder='Enter email address' className='form-control' />
                <button className='btn btn-light ms-3' type='submit'>Submit</button> 
                </div>
              </form>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text">Our Company</h5>

              <ul class="list-unstyled mb-0">
                <li className='mt-3'>
                  <a href="#!" className="text-white">Terms Of Use</a>
                </li>
                <li className='mt-3'>
                  <a href="#!" className="text-white">Privacy Policy</a>
                </li>
                <li className='mt-3'>
                  <a href="#!" className="text-white">About</a>
                </li>
                <li className='mt-3'>
                  <a href="#!" className="text-white">Refund Policy</a>
                </li>

                <li className='mt-3 d-flex'>
                  <span>
                    <img src={Facebook} style={{ width: "40px", height: "40px" }} />
                  </span>
                  <span className='ms-3'>
                    <img src={Instagram} style={{ width: "35px", height: "35px" }} />
                  </span>
                  <span className='ms-3'>
                    <img src={Twitter} style={{ width: "35px", height: "35px" }} />
                  </span>
                  <span className='ms-3'>
                    <img src={Envelope} style={{ width: "35px", height: "35px" }} />
                  </span>
                </li>
              </ul>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <span><BsWhatsapp
                    size={25}
                    color="#FFB900"
                    className='me-4' />
                  </span>
                  <a href="#!" className="text-white"> +91-9665050993</a>
                </li>
                <li className='mt-3'>
                  <span><BsTelephoneForward
                    size={25}
                    color="#FFB900"
                    className='me-4' />
                  </span>
                  <a href="#!" className="text-white">+1-917-310-0861</a>
                </li>
                <li className='mt-3'>
                  <span><BsEnvelope
                    size={25}
                    color="#FFB900"
                    className='me-4' />
                  </span>
                  <a href="#!" className="text-white">info@mapmycrop.com</a>
                </li>
                <li className='mt-3'>
                  <span><BsGeoAlt
                    size={25}
                    color="#FFB900"
                    className='me-4' />
                  </span>
                  <a href="#!" className="text-white">One Word Trade Center Suite 8500 NY NY 1007</a>

                </li>
                <li className='mt-4 d-flex'>
                  <span className='me-2'>
                    <img src={Gplay} style={{ width: "200px", height: "60px" }} />
                  </span>
                  <span>
                    <img src={AppStore} style={{ width: "200px", height: "60px" }} />
                  </span>
                </li>
              </ul>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </div>
        <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          Copyright @ 2022 Map Crop. All Rights Reserved.
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
};

export default Footer