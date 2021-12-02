import React from 'react';
import "./Project.css"
import { Col, Container,Row } from 'react-bootstrap';
import { Link,Route } from 'react-router-dom';
import car from "../../Files/rsz_carw1.png"
import tor from "../../Files/rsz_11tour.png"
import dental from "../../Files/dental.PNG"
const Projects = () => {
    return (
       
        <div id="project" className="body">
             <div data-aos="flip-down" className="mainAbout">
            <p class="fs-1"  ><span className="colo">Proj</span>ects</p>

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
<br />
{/* -------------------------------------------------------- */}

<Container>
    <Row>
        <Col  sx={12} sm={6}>
        <div class="project"  data-aos="flip-left">
  <div class="card">
    <div class="imgBx">
      <img height="180px" src={car} ></img>
    </div>
    <div class="contentBx">
      <h2>Car Shop</h2>
      <br />
      <div class="size">
        <span><a href="https://frosty-lamport-15cdaa.netlify.app" target="_blank">Live site</a> </span>
        <span><a href="https://github.com/Moeen10/Car-Shop" target="_blank">Client Code</a> </span>
        <span><a href="https://github.com/Moeen10/Car-Shop-Server_Side" target="_blank">Server Code</a> </span>
        
        
      </div>
      
     <br />
     <Route path="/">
     <Link to="/car_shop"><a className="click">Visit</a></Link>
</Route>
    </div>
  </div>
</div>
<br />
<br />
<br />
        </Col>
        <Col sx={12} sm={6}  >
        <div class="project"  data-aos="flip-right">
  <div class="card">
    <div class="imgBx">
      <img height="180px" src={tor} ></img>
    </div>
    <div class="contentBx">
      <h2>Tourist</h2>
      <br />
      <div class="size">
       
     <span><a href=" https://assignment11-ca832.web.app/" target="_blank">Live site </a> </span>  
     <span><a href=" https://github.com/Moeen10/Travel" target="_blank">Client Code</a> </span>  
     <span><a href=" https://github.com/Moeen10/Travel-Server" target="_blank">Server Code</a> </span>  
        
      </div>
     <br />
     <Link to="/tourist"><a className="click">Visit</a></Link> 
    </div>
  </div>
</div>
<br />
<br />
<br />
        </Col>
    </Row>
    <br />
    <Row>
        <Col  sx={12} sm={6}>
        <div class="project"  data-aos="flip-left">
  <div class="card">
    <div class="imgBx">
      <img height="175px" src={dental} ></img>
    </div>
    <div class="contentBx">
      <h2>Dental Care</h2>
      <br />
      <div class="size">
      <span><a href=" https://dental-care-1f2a9.web.app/" target="_blank">Live site </a> </span>  
     <span><a href="https://github.com/Moeen10/Dental" target="_blank">Client Code</a> </span>  
        
      </div>
      
     <br />
     <Link to="/dental"><a className="click">Visit</a></Link> 
    </div>
  </div>
</div>
<br />
<br />
        </Col>
        </Row>
    </Container>


{/* ------------------------------------------------ */}
        </div>
    );
};

export default Projects;