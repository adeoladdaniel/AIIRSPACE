import React from 'react';
import '../App.scss';
import {  Col, Form, Container,FormControl,Button, Row, } from "react-bootstrap";
import { Link} from 'react-router-dom'


function About() {
  return (
    <div className="App">
      <div className="about_header">
      <h1 className="about_header_text">
          About Us
      </h1>

      <h5 className="about_header_text1">
       <Link to="/home"> Home</Link>/About
      </h5>
      </div>

<div className="about_section">
<Container>
  <Row>
    <Col md={6}>
    <h1 className="about_sec_text">
      OUR MISSION
    </h1>

    <ul> 

      <li>  To provide effective Services </li>
      <li>to gain Reputable name tn Air conditioning service nationwide.</li>
      <li>to offer concrete sales at good prices for cusomers satisfaction.</li>
       <li>To provide the ultimate user experience.</li>
    </ul>

    </Col>
    <Col md={6}>
    <img className="about_img" src="./img/photo-1550998251-1e18917c975c.jpeg"/>
      </Col>

      <Col md={6}>
      <img className="about_img1" src="./img/photo-1590756254933-2873d72a83b6.jpeg"/>
      </Col>
 
      <Col md={6}>
      <h1 className="about_sec_text1">
      OUR ViSION
    </h1>

    <ul> 

      <li>To be the number 1 leadin company in air conditiong.</li>
      <li>To have customers Worldwide.</li>
      <li>To create an effective bridge betwwen products and services .</li>
         </ul>
    
      </Col>
  </Row>
</Container>
</div>

<div className="about_section_1">
      <Container>
        <Row>
          <Col md={6}>
         <h3 className="about_sec_text1">
           SERVICES WE OFFER
         </h3>

         <ul>
           <li>REPAIRS.</li>
           <li>SERVICING.</li>
           <li>INSTALLATIONS.</li>
           <li>SALES.</li>
           
         </ul>
          </Col>
          <Col md={6}>
          <img className="about_img11" src="./img/Air-Conditioner-Wall-AC_Hd 2.png"/>
          </Col>
        </Row>
      </Container>
</div>
     
    </div>
  );
}

export default About;