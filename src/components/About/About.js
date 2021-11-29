import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className="mainAbout">
            <div data-aos="flip-down">
            <p class="fs-1"  ><span className="colo">About</span> Me</p>

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
<div data-aos="zoom-in">
        Name : T.M Moeen Uddin <br />
        Qualification : Department Of Software Engineering (3rd Year)<br />
        Post : Jr. MERN Stack Developer<br />
        Language : Bangla,English,Hindi(conversationable) <br />
</div>
        
        </div>
    );
};

export default About;