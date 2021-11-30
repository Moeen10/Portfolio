import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Skills.css'
const Skills = () => {
    return (
        <div id="skills" className="mainAbout">
        <div data-aos="flip-down">
        <p class="fs-1"  ><span className="colo">Sk</span>ill<span className="colo">s</span></p>

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
<br /><br />
<br /><br />
        <Container>
            <Row>
                <Col xs={12} sm={4} >
                <div className="body"  data-aos="flip-up">
  <div class = "contain">
    <div class = "card">
      <div class = "image">
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="" />
      </div>
      <div class = "content">
      <h1>HTML</h1>
      </div>
    </div>    
  </div>
</div>
         </Col>  
         <br /><br />     
         <br /><br />     
                <Col xs={12} sm={4} >
                <div className="body" data-aos="flip-left">
  <div class = "contain">
    <div class = "card">
      <div class = "image">
        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="" />
      </div>
      <div class = "content">
      <h1>CSS</h1>
      </div>
    </div>    
  </div>
</div>
         </Col>
         <br /><br />     
         <br /><br /> 
                <Col xs={12} sm={4} >
                <div className="body" data-aos="flip-up">
  <div class = "contain">
    <div class = "card">
      <div class = "image">
        <img src="https://icon-library.com/images/javascript-icon/javascript-icon-0.jpg" alt="" />
      </div>
      <div class = "content">
        <h1>Java Script</h1>
      </div>
    </div>    
  </div>
</div>
         </Col>       
            </Row>
        </Container>
        </div>
       
    );
};

export default Skills;


// <div className="fixed">
// <div class="card1">

// <img src="http://www.pngmart.com/files/5/Pyramids-PNG-HD.png" alt="" />
// <h3>Pyramids</h3>
// <p>The Egyptian pyramids are ancient pyramid-shaped masonry structures located in Egypt. As of November 2008, sources cite either 118 or 138 as the number of identified Egyptian pyramids.</p>
// </div>

// <div class="card2">
// <img src="https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png" alt="" />
// <h3>Statue of Liberty</h3>
// <p>The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.</p>
// </div>

// <div class="card3">
// <img src="http://pluspng.com/img-png/download-taj-mahal-png-images-transparent-gallery-advertisement-1185.png" alt="" />
// <h3>Taj Mahal</h3>
// <p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor.</p>
// </div>
// <div class="footer">
// </div>
// </div>