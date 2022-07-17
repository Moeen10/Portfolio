import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import MyPic from './components/MyPic/MyPic';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// import { useEffect,useRef,useState } from 'react';
import { Col, Container,Row } from 'react-bootstrap';
// import Particle from './components/Particle/Particle';
import SocialMedia from './components/SocialMedia/SocialMedia';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Home from './components/Home/Home';
import Email from './components/Email/Email';
import Projects from './components/Projects/Projects';
import Car from './components/Projects/Car';
import Tourist from './components/Projects/Tourist';
import Dental from './components/Projects/Dental';
import Blogs from './components/Blogs/Blogs';
import Temperature from './components/Projects/Temperature';



function App() {
 

  return (
    <div>
<BrowserRouter>
      <NavBar></NavBar>

<Switch>
<Route exact path="/blogs">
 <Blogs></Blogs>
</Route>
<Route exact path="/tourist">
 <Tourist></Tourist>
</Route>
<Route exact path="/temperature">
 <Temperature></Temperature>
</Route>
<Route exact path="/car_shop">
 <Car/>
</Route>
<Route exact path="/dental">
 <Dental></Dental>
</Route>
 
<Container>
  <Row>
  <Col sm={4}  xs={12} ><MyPic/> </Col>
 
  

  <Col sm={8} xs={12}>
<br />
  <Route path="/">
            <Home id="home" />
          </Route>
   
    <br />
<br />
<br />
<br />
<Route path="/home">

<About ></About>

<br />
<br />

<SocialMedia className="social"/>

</Route>

<br />
<br />
<br />
<Route path="/home">
 <Skills id="skills"/>
</Route>
<br />
<br />
<br />
<Route path="/home">
<Projects/>
</Route>
<br />
<br />
<br />
<Route path="/home">
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