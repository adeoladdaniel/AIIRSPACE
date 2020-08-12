import React from 'react';
import '../App.scss';
import {  Col, Form, Container,FormControl,Button, Row, } from "react-bootstrap";
import { Link} from 'react-router-dom'



function Quote() {
  return (
    <div className="App">
           <div className="quote_page">

             <h1 className="Quote_order">
           <b>    Order Details</b>
             </h1>
                <Form className="quote_form">
                    <h5> Name</h5>
                    <Form.Group className="quote_form1" controlId="formBasicEmail">
                         <Form.Control className="quote_input" type="email" placeholder="" />
                 </Form.Group>

                 <h5> Phone-Number</h5>
                 <Form.Group className="quote_form1" controlId="formBasicEmail">
                             <Form.Control className="quote_input" type="email" placeholder="" />
                 </Form.Group>

                 <h5>Email</h5>
                 <Form.Group className="quote_form1" controlId="formBasicEmail"> 
                             <Form.Control className="quote_input" type="email" placeholder="" />
                 </Form.Group>
                 <h5> Address</h5>
                 <Form.Group className="quote_form1" controlId="formBasicEmail">
                          <Form.Control className="quote_input" type="email" placeholder="" />
                 </Form.Group>
                 <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Custom select</Form.Label>
                    <Form.Control as="select" custom>
                          <option>Repair</option>
                          <option>Installation</option>
                         
                    </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Select Quantity</Form.Label>
                    <Form.Control as="select" custom>
                          <option>1-10</option>
                          <option>10-30</option>
                          <option>30-50</option>
                          <option>50-100</option>
                          <option>100 and above</option>
                    </Form.Control>
        </Form.Group>
        <br/>
        <br/>
        <br/>
        <h5> Specify your request here</h5>
        <Form.Group  controlId="exampleForm.ControlTextarea1">
  
  <Form.Control className="quote_input" as="textarea" rows="3" />
</Form.Group>
<br/>
<Button className="but_2d" >
            Submit
           </Button>
                </Form>
       
           </div>
    </div>
  );
}

export default Quote;