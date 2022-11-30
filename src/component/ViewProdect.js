import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactReadMoreReadLess from "react-read-more-read-less";
import AppleStore from "../images/AppleStoreImg.png";
import PlayStoreimages from "../images/PlayStoreimages.png";
import axios from 'axios';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

function ViewProdect() {

  const { id } = useParams();
  const replaceimg = "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";

  // const [product, setProduct] = useState([]); 


  // useEffect(() => {
  //   // console.log(id);
  //   const getProduct = async () => {
  //     const response = await fetch(`https://api.mapmycrop.com/diseases/$(id)`);
  //     setProduct(await response.json());
  //     console.log(product);
  //   }
  //   getProduct();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);


  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.mapmycrop.com/diseases"
    }).then((res) => {
      console.log(res.data.data); //res.data.data
      setProduct(res.data.data);  //res.data.data
    })
  }, [])



  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className='container-fluid' >
      <div className='row g-3 mt-4'>
        {
          product.length > 0 && product.map((products) => {
            if (products.id == id) {
              return (
                <>
                  <div className='col-12 col-md-6 col-lg-3'>

                    <div className='card'>
                      <div className='list-group list-group-flush'>
                        <div className='mt-3 ms-3'>
                          <h6 className='card-title card_title'>{products.name}</h6>
                          <div className='card-title Virus-Name'>Bacteria</div>
                          <div className='mt-4 mb-3 Virus-Name' style={{ fontSize: "13px" }}>
                            <i>Phytophthodra infestans</i>
                          </div>
                        </div>
                      </div>
                      <div className='card-body'>
                        <div className='card-title'>
                          <h5>Get Application For Mobile</h5>
                        </div>
                        <div className='card-item mt-4'>
                          <img className='mt-3 p-1' style={{ width: "140px", height: "50px" }} src={AppleStore} />
                          <img className='mt-3 p-1' style={{ width: "140px", height: "54px" }} src={PlayStoreimages} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-md-6 col-lg-6' key={products.id}>
                    <div className='card'>
                      <Carousel pause='hover' interval={null}>
                        {
                          products.images.map((img, i) => (
                            <Carousel.Item key={i}>
                              <img src={img} className="card-img-top cropImg" alt={"Images..."}
                                onError={(e) => (e.target.onerror = null)(
                                  (e.target.src = replaceimg)
                                )}
                              />

                              <p className='card-title mt-2'>
                                <h5 className='ms-3'>{products.affetected_plants[i]}</h5>
                                <hr></hr>
                              </p>
                            </Carousel.Item>
                          ))
                        }
                      </Carousel>
                      <div class="list-group-flush">
                        <h4 className='card-title ms-3'><p>Symptoms</p></h4>
                      </div>
                      <div class="list-group list-group-flush">
                        <ul>
                          <li>
                            <ReactReadMoreReadLess
                              readMoreClassName="readMoreClassName"
                              readLessClassName="readMoreClassName"
                              charLimit={200}
                              readMoreText="Read More"
                              readLessText="Read Less"
                            >
                              {products.symptoms}
                            </ReactReadMoreReadLess>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="card mt-5">
                      <div class="card-header">
                        <h4>Cause Of Disease</h4>
                      </div>
                      <ul>
                        <li>
                          <ReactReadMoreReadLess
                            readMoreClassName="readMoreClassName"
                            readLessClassName="readMoreClassName"
                            charLimit={200}
                            readMoreText="Read More"
                            readLessText="Read Less"
                          >
                            {products.causes}
                          </ReactReadMoreReadLess>
                        </li>
                      </ul>
                    </div>

                    <div class="card mt-5">
                      <div class="card-header">
                        <h4>Solution</h4>
                      </div>
                      <ul>
                        <li>
                          <ReactReadMoreReadLess
                            readMoreClassName="readMoreClassName"
                            readLessClassName="readMoreClassName"
                            charLimit={200}
                            readMoreText="Read More"
                            readLessText="Read Less"
                          >
                            {products.symptoms}
                          </ReactReadMoreReadLess>
                        </li>
                      </ul>
                    </div>

                  </div>

                  <div className='col-12 col-md-6 col-lg-3'>
                    <div className='card'>
                      <div className='card-body'>
                        <Slider {...settings}>
                          {products.images.map((item, i) => (
                            <div key={i}>
                              <img src={item} alt={"Loading..."} onError={(e) => (e.target.onerror = null)(
                                (e.target.src = replaceimg)
                              )} style={{ width: "120px", height: "90px" }} />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })
        }
      </div>
    </div >
  )
}

export default ViewProdect