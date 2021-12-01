import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import MyPic from './components/MyPic/MyPic';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect,useRef,useState } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
// import Particle from './components/Particle/Particle';
import SocialMedia from './components/SocialMedia/SocialMedia';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';
import Email from './components/Email/Email';



function App() {
 

  return (
    <div>
<BrowserRouter>
      <NavBar></NavBar>

<Switch>

<Container>
  <Row>
  <Col sm={4}  xs={12} ><MyPic/> </Col>
 
  

  <Col sm={8} xs={12}>

  <Route path="/">
            <Home id="home" />
          </Route>
   
    <br />
<br />
<br />
<br />
<Route path="/">

<About ></About>

<br />
<br />

<SocialMedia className="social"/>

</Route>

<br />
<br />
<br />
<Route path="/">
 <Skills id="skills"/>
</Route>
<br />
<br />
<br />
<Route path="/">
<Email/>
</Route>
<br />





     </Col> 
     
   
         
    </Row>
  
</Container> 
</Switch>
</BrowserRouter>
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