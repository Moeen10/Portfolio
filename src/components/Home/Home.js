import React from 'react';

const MagicOcean = [
    "MERN stack developer",
  ];
  let index = 0;

   
    
  
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])

const Home = () => {
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
  
    return (
        <>
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
       </>
    );
};

export default Home;