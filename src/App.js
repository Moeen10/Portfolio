import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import MyPic from './components/MyPic/MyPic';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect,useRef,useState } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
// import Particles from 'react-particles-js';
import useTypewriter from "react-typewriter-hook";
// import Particle from './components/Particle/Particle';
// import {Button} from '@mui/material';
import MyPDF from './Files/myResume.pdf';
import SocialMedia from './components/SocialMedia/SocialMedia';
import About from './components/About/About';
import Skills from './components/Skills/Skills';


const MagicOcean = [
  "MERN stack developer",
];
let index = 0;
function App() {
  const [magicName, setMagicName] = useState("Hello Viewer...");
  const intervalRef = useRef({});
  const name = useTypewriter(magicName);
  useEffect(
    () => {
      intervalRef.current = setInterval(() => {
        // index = index + 1 > 2 ? 0 : ++index + 1;
        index = index > 0 ? 0 : ++index;
        setMagicName(MagicOcean[index]);
      }, 2000);
      return function clear() {
        clearInterval(intervalRef.current);
      };
    },
    [magicName]
  );

  

useEffect(()=>{
  AOS.init({duration:2000});
},[])
  return (
    <div>

      <NavBar></NavBar>



<Container>
  <Row>
  <Col sm={4}  xs={12} ><MyPic/> </Col>
 
  

  
  <Col sm={8} xs={12}>
   
    <div data-aos="fade-up"
     data-aos-duration="3000">
         <div className="App">
      <h3>Hi There !</h3>
   
      <h2>I'm <span className="bld">T.M Moeen uddin</span></h2>
      <h5 className="cursor  ani">I am<span  className="bly"> {name}</span></h5>
      <br />
     
    </div> 
    <div>
    <h6>An aspiring MERN Stack Developer.I lost myself when I dive into the codes. I am a professional web designer and developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, Jquery, React, Node JS, Express JS, Mongo DB. Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 2 years of experience
         working closely with Web Development to outline organizational needs and translate them into extensive lines of code that support objectives. Adept creation of scripts using HTML, CSS and JavaScript to convey unique branding and promote sales and marketing opportunities. Specialty supporting intricate backend needs and lending assistance throughout webpage lifecycle.</h6>
    </div>
    <br />
    </div>

    <div data-aos="fade-right">
    <a href={MyPDF} download="Moeen'sResume.pdf"><button type="button" class="btn btn-primary">Resume</button>
    </a>
    </div>
    <br />
<br />
<br />
<br />

<About ></About>
<br />
<br />

<SocialMedia className="social"/>
<br />
<br />
<br />

 <Skills/>

<br />
<br />
<br />
To be continue.....








<br />
<br />
<br />
<br />
<br />
<br />



     </Col> 
     
   
         
    </Row>
  
</Container> 

    </div>
  );
}

export default App;





// <Container>
//   <Row>
//   <Col sm={4}  xs={12} ><MyPic/> </Col>

//     <Col sm={8} xs={12}>
    
//         <div className="App">
//       <h3>HI There !</h3>
      

//       <h2>I'm T.M Moeen uddin</h2>
//       <h5 className="cursor  ani">{name}</h5>
//     </div>
//     </Col>       
//       </Row>
//     <Particles
//     params={{
// 	    "particles": {
// 	        "number": {
// 	            "value": 10
// 	        },
// 	        "size": {
// 	            "value": 3
// 	        }
// 	    },
// 	    "interactivity": {
// 	        "events": {
// 	            "onhover": {
// 	                "enable": true,
// 	                "mode": "repulse"
// 	            }
// 	        }
// 	    }
      
// 	}}
//    height="30vh"
//   width="40vh"
//   />
  



 
// </Container> 



  
// <div className="mu text-white ">


// <div className="border border-info" data-aos="fade-left">asaf
// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis temporibus, odit rerum similique aliquid iusto vitae eius maiores obcaecati vel dolores ut et omnis mollitia voluptatum. Quidem voluptatum perferendis quas!
// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis temporibus, odit rerum similique aliquid iusto vitae eius maiores obcaecati vel dolores ut et omnis mollitia voluptatum. Quidem voluptatum perferendis quas!
// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis temporibus, odit rerum similique aliquid iusto vitae eius maiores obcaecati vel dolores ut et omnis mollitia voluptatum. Quidem voluptatum perferendis quas!
// Lorem</div><br />
// <div className="border border-info" data-aos="flip-down">
//   as, as ss.ak .s 
// </div><br />

// <div data-aos="fade-up"
//      data-aos-anchor-placement="top-bottom">
//        I am a Boy
// </div>
// <div className="border border-info " data-aos="flip-down" >
// aslknfaslkfnalskf 
// asnsaflsnaflaslknfalsfnalskfnlaa alsknflsanfa 
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic nihil quod eum vel deleniti sed saepe quos nisi ex.
// as, as,jf asbsak asbkjsafb absjkasb sajbfjs
// </div>
// <br />
// <div className="border border-info ">
//   My name is moeen1
// </div>
// <br />
// <div className="border border-info ">
//   My name is moeen2
// </div>
// <br />
// <div className="border border-info " data-aos="zoom-out-left" >
//   My name is moeen3
// </div>
// <br />
// <div className="border border-info "  data-aos="zoom-out-right">
//   My name is moeen4
// </div>
// <br />
// <div className="border border-info " data-aos="zoom-out" >
//   My name is moeen5
// </div>
// <br />
// <div className="border border-info "  data-aos="zoom-in-left">
//   My name is moeen6
// </div>
// <br />
// <div className="border border-info "  data-aos="zoom-in-right" >
//   My name is moeen7
// </div>
// <br />
// <div className="border border-info "  data-aos="zoom-in-down" >
//   My name is moeen8
// </div>
// <br />
// <div className="border border-info " data-aos="zoom-in" >
//   My name is moeen9
// </div>
// <br />
// <div className="border border-info " data-aos="flip-up" >
//   My name is moeen asjkfsajkf1
// </div>
// <br />
// <div className="border border-info " data-aos="flip-up" >
//   My name is moeen asjkfsajkf2
// </div>
// <br />
// <div className="border border-info " data-aos="flip-up" >
//   My name is moeen asjkfsajkf2
// </div>
// <br />

// <br />
// <br />


// <div>hello</div>







// </div>