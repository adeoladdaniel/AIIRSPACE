import React from 'react';
import '../App.scss';
import {  Col, Form, Container,FormControl,Button, Row, } from "react-bootstrap";
import { Link} from 'react-router-dom'


function Home() {
  return (
    <div className="App">
        <div className="home_header">
          <Container>              
        <Row>
            <Col md={6}>
              <h5 className="text_1">
              THE BEST <br/>  SOLUTION FOR LUXURY
              </h5>

              <h1>
                <b>
                EFFECTIVE
                LUXYRIOUS EXPERIENCE WITH AIIR SPACE
                </b>
              </h1>
              <p>
                Air Space provide a luxyrious experience that helps you to connect with product and services with special needs that partains to Air Conditioin (AC) and it's accercories 
              </p>
          <Link to="/about">
              <Button className="but_2d" >
                Learn More
           </Button>
           </Link>
            </Col>
            <Col md={6}>
              <img className="img_1" src="./img/acnew 21.png"/>
            </Col>
          </Row>
          </Container>

        </div>
        <div className="section_1">
          <Container>
            <Row>
                <Col md={4}>
                <img className="sec_img" src="./img/configuration.png"/>
                <h1 className="head_sec">Effective <br/>  Installation Services
               
                </h1>
                <p className="para">
                We perform effective Installation <br/> and do it on time.
                </p>
                </Col>
                <Col md={4}>
                <img className="sec_img" src="./img/headphones.png"/>
                <h1 className="head_sec">Expericenced<br/> Servicing of Air Condition
               
                </h1>
                <p className="para">
                We provide effecetive servicing <br/> service Nationwide.
                </p>
                </Col>
                <Col md={4}>
                <img className="sec_img" src="./img/hammer.png"/>
                <h1 className="head_sec">Effective <br/> Repair 
                                          Services
               
                </h1>
                <p className="para">
            Effective repair services can be found at <br/> AIIRSPACE.
                </p>
                </Col>
            </Row>
          </Container>
          <div className="section_2">
              <Container>
                <Row>
                  <Col md={6}>
                  <h3 className="sec_text1">
                  Why <br/> chose us
                  </h3>
                  <h1 className="sec_text">
                  We help you to make work easy
                  </h1>
                  <p className="sec_text2">We understand what your business means you,<br/>your requirements </p>
                  </Col>
                
                  <Col md={6} className="Blob">
                  <Row className="fr">
                    <Col md={6} className="mr">
                 <div className="blob_box">
                      <div >
                      <img className="mini_img" src="./img/idea.png"/>
                      <p className="mini_text"><b>Effective mangement</b></p>
                      <p className="mini_text1">We at AIIRSPACE are very  effective Management of product and services.</p>
                      </div>
                 </div>
                    </Col>
                    <Col md={6} className="mr">
                    <div className="blob_box">
                    <img className="mini_img" src="./img/sales.png"/>
                    <p className="mini_text"><b>Sales of Goods</b></p>
                    <p className="mini_text1">We offer factory fitted air conditions at affordable prices you can Trust .</p>
                    </div>
                    </Col>
                    <Col md={6} className="mr">
                        <div className="blob_box1">
                        <img className="mini_img" src="./img/hammer.png"/>
                        <p className="mini_text"><b>Effection  Repairs</b></p>
                        <p className="mini_text1">  Effective repair services can be found at <br/> AIIRSPACE.</p>
                       </div>
                    </Col>
                    <Col md={6} className="mr">
                    <div className="blob_box1">
                    <img className="mini_img" src="./img/percentage.png"/>
                    <p className="mini_text"><b>Discounting Of Products</b></p>

                    <p className="mini_text1">Patronising aiir space gives the right to our Discount offers.</p>
                    </div>
                    
                    </Col>
                  </Row>
              
                  </Col>
                </Row>
              </Container>
          </div>
          <div className="section_3">
            <Container>
              <Row>
                <Col md={6}>
                <div className="sec_3">
                  <h4><b>We Offer Services You Can Trust</b> </h4>

                  <p>Great services you can Trust</p>
                  
                  <Link to="/about">
              <Button className="but_2d" >
                Learn More
           </Button>
           </Link>

                   </div>  
              
                </Col>

                <Col md={6}>
                
                
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section_4">
            <Container>
              <Row>
                <Col md={3}>
                  <h1 className="sec_4_text">1730+</h1>
                  <h5 className="sec_4_text">Projects <br/> Done</h5>
                </Col>
                <Col md={3}>
                <h1 className="sec_4_text">125+</h1>
                  <h5 className="sec_4_text">USERS <br/> WORLDWIDE</h5>
                </Col>
                <Col md={3}>
                <h1 className="sec_4_text">1730+</h1>
                  <h5 className="sec_4_text">AVAILABLE <br/> COUNTRY</h5>
                </Col>
                <Col md={3}>
                <h1 className="sec_4_text">1730+</h1>
                  <h5 className="sec_4_text">AWARD <br/> Winner</h5>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
     
    </div>
  );
}

export default Home;