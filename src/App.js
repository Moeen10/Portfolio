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
<Projects/>
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