import React from 'react';
import '../App.scss';
import { Link} from 'react-router-dom'
import {   Row,Col,Container } from "react-bootstrap";

function Foot() {
  return (
    <div id="foot">
      <Container>
      <img className="logo-air" src="./img/Group 10.png"/>
        <Row>
          <Col md={3}>
          <p className="foot_text">
          Air Space provide a luxyrious experience that helps you to connect with product and services with special needs that partains to Air Conditioin (AC) and it's accercories
          
          </p>
          </Col>
          <Col md={3}>
            <p className="foot_head"><b> COMPANY</b></p>
          <ul>
            <li className="foot_text">Home</li>
            <li className="foot_text"> About</li>
            <li className="foot_text">Contact</li>
          </ul>
          </Col>
          <Col md={3}>
          <p className="foot_head"><b> SUPPORT</b></p>
          <ul>
            <li className="foot_text">08033467102</li>
            <li className="foot_text"> 09052027107</li>
            <li className="foot_text">Adeolaaddison@gmail.com</li>
          </ul>
          </Col>
          <Col md={3}>
          <p className="foot_head"><b> GET IN TOUCH</b></p>

          <img className="foot_social" src="./img/facebook.png"/>
          <img className="foot_social" src="./img/whatsapp.png"/>
          <img className="foot_social" src="./img/instagram-sketched.png"/>
          </Col>
        </Row>
      </Container>
    </div>
   
  );
}

export default Foot;