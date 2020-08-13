import React from 'react';
import '../App.scss';
import {  Col, Form, Container,FormControl,Button, Row, } from "react-bootstrap";
import { Link} from 'react-router-dom'



function Contact() {
  return (
    <div className="App">
        <div className="contact_header">
      <h1 className="contact_header_text">
          Contact Page
      </h1>
        </div>


<div className="contact_section">

    <Container>
      <Row>
        <Col md={6}>
        <h2 className="contact_text">
        <b>  Contact Us</b>
        </h2>

        <Form>
        <Form.Group controlId="formBasicEmail">

    <Form.Control type="name" placeholder="Name" />
    
  
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
  
    <Form.Control type="email" placeholder="Enter email" />
    
  
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
  
    <Form.Control type="number" placeholder="Phone-number" />
    
  
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
   
    <Form.Control type="text" placeholder="Address" />
    
  
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
  
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
        </Form>

        <Button className="but_2d" >
                Send
           </Button>
        </Col>

        <Col md={6}>
        <div className="contact_box">
            <h5> <b> Call us</b></h5>
            <p>
              09052027107
            </p>

            <h5> <b> Email us</b></h5>
            <p>
              timiyidandsons@yahoo.com
            </p>

            <h5> <b> Loaction</b></h5>
            <p>
              21 alhaji salisu street obanikoro
            </p>

            <img className="contact_social" src ="./img/twitter.png"/>
            <img className="contact_social" src ="./img/facebook (1).png"/>
            <img className="contact_social" src ="./img/instagram.png"/>
        </div>
        </Col>
      </Row>
    </Container>
</div>
    </div>
  );
}

export default Contact;