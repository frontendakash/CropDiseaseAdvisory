import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import { BsSearch } from "react-icons/bs";



function Product() {
  const [items, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");

  const replaceimg = "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80";

  //https://api.mapmycrop.com/diseases

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://api.mapmycrop.com/diseases"
    }).then((res) => {
      //  console.log(res.data);
      setData(res.data.data);     //res.data.data
    }).catch((e) => {
      console.log(e);
      setShow(true);
    }).finally(() => {
      setLoading(false)
    });
  }, [])

  return (
    <>
      {/* Error Message Box */}

      <div className='container-fluid'>
        <Row className='mt-4' style={{ marginLeft: "450px" }}>
          <Col xs={12}>
            <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
              <Toast.Header>
                {/* <strong className="me-auto">Bootstrap</strong> */}
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>
                <img
                  src="https://i.pinimg.com/originals/d2/7e/57/d27e571f5f206ba0ed3202be3797d05f.jpg"
                  className="rounded me-2"
                  alt=""
                  style={{ height: "250px", width: "330px" }} />
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
        {/*Error Message Box end */}


        {/* API Loading */}
        {loading && (
          <div className='text-center mt-4'>
            {""}
            <h4>loading...</h4>
          </div>
        )}


        {/* Cards Container */}
        <div className='row g-3 rowcontainer-fluid '>

          <div className='SearchBox'>
            <form>
              <div className='input-group'>
                <label className='Search mt-1'><h5 className='me-4'>Get Informed Advice On Pesticides Based On Pests</h5></label>
                <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" id='Search'
                  onChange={(e) => setQuery(e.target.value)}
                />

                <button className="input-group-text" id="basic-addon1"><BsSearch></BsSearch></button>
              </div>
            </form>
          </div>

          {
            items.filter((user) => user.name.toLowerCase().includes(query)).map((product, index) => (
              <div className='col-12 col-md-6 col-lg-4'>
                <div className='card' key={index}>
                  <Link to={`/ViewData/${product.id}`}>
                    <img className='card-img-top' src={product.images[0]}
                      alt={"Images..."}

                      onError={(e) => (e.target.onerror = null)(
                        (e.target.src = replaceimg)
                      )}

                    />
                  </Link>
                  <div className='card-body'>
                    <h6 className='card-title text-black mb-2'>{product.name}</h6>
                    <Link to={`/ViewData/${product.id}`}>
                      <button className='btn w-100' style={{ backgroundColor: "#F7941E" }}>Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {/* Cards Container end*/}
    </>
  );
};
export default Product