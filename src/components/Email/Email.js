import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {  Col, Container,  Row } from 'react-bootstrap';

import './Email.css'
const Email = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fqkelnq', 'template_wrdjliv', form.current, 'user_GSEIAdLd8a9QdPNdDjgua')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
   <div id="contact">
             <Container>
            <Row>
                <Col sx={12} sm={12}>
                <div data-aos="flip-down" className="mainAbout">
            <p class="fs-1"  ><span className="colo">Con</span>tact</p>

            </div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
       <hr
        style={{
            color:" white",
            backgroundColor: "white",
            height: 5
        }}
    /> 
</div>
                <br />
                <br />
                
                
                
<div data-aos="flip-left">
<form id="form" class="topBefore"  ref={form} onSubmit={sendEmail}>
<input id="name" type="text" placeholder="NAME" name="user_name"  />
<input id="email" type="text" placeholder="E-MAIL" name="user_email" />
<textarea id="message" type="text" placeholder="MESSAGE" name="message"></textarea>
<input id="submit" type="submit" value="Send!" />

</form>
</div>


                </Col>
            </Row>
        </Container>
   
    </div>

    
  );
};


export default Email;




 