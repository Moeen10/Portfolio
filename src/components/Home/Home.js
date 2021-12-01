import React from 'react';
import useTypewriter from "react-typewriter-hook";
import { useEffect,useRef,useState } from 'react';
import AOS from 'aos';
import MyPDF from '../../Files/myResume.pdf';

const MagicOcean = [
    "MERN stack developer",
    "React Devoloper",
    "Front-end Developer",
  ];
  let index = 0;


const Home = () => {
  
    const [magicName, setMagicName] = useState("MERN stack developer");
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(
      () => {
        intervalRef.current = setInterval(() => {
          // index = index + 1 > 2 ? 0 : ++index + 1;
          index = index > 1 ? 0 : ++index;
          setMagicName(MagicOcean[index]);
        }, 4000);
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
        <div id="home">
         <div data-aos="fade-up"
     data-aos-duration="3000">
         <div className="App">
             <br />
      <h3>Hi There !</h3>
   
      <h2>I'm <span className="bld">T.M Moeen uddin</span></h2>
      <h5 className="cursor  ani">I am<span  className="bly"> {name}</span></h5>
      <br />
      <br />
     
     
    </div> 
    <div>
    <h6>An aspiring MERN Stack Developer.I lost myself when I dive into the codes. I am a professional developer.No project is too big or too small for me. Recently I have completed react and node js. I am expertise in Html5, Css3, Javascript, Bootstrap, React, Node JS, Express JS, Mongo DB. Resourceful Web Developer lends hands-on approach to customizing web presence strategy. More than 6 months of experience
      .I also like to do problem- solving. I want to be a successful web developer. I genuinely love to learn and always looking for improvement.</h6>
    </div>
    <br />
    <br />
    </div>

    <div data-aos="fade-right">
    <a href={MyPDF} download="Moeen'sResume.pdf"><button type="button" class="btn btn-primary">Resume</button>
    </a>
    </div>
    </div>
    );
};

export default Home;