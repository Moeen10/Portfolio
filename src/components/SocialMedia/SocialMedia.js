import React from 'react';
import {AnimatedSocialIcon} from 'react-animated-social-icons';
import './Social.css'
const SocialMedia = () => {
    return (
     <>   
            
<div id="social"  className="d-flex justify-content-center" >

    <div className="item-wrapper"  data-aos="flip-up">
        <AnimatedSocialIcon 
            brandName="github"
            width="2em" 
            url="https://github.com/Moeen10"
            defaultColor="white" 
            hoverColor="white" 
            animation="bounce" />
    </div>

    <div className="item-wrapper" data-aos="flip-left">
        <AnimatedSocialIcon 
            brandName="linkedin"
            width="2em" 
            url="https://linkedin.com/in/t-m-moeen-uddin-a09703184/"
            defaultColor="#7BF1E3" 
            hoverColor="#7BF1E3" 
            animation="bounce" />
    </div>
    <div className="item-wrapper"  data-aos="flip-up">
        <AnimatedSocialIcon 
            brandName="facebook"
            width="2em" 
            url="https://www.facebook.com/moeen.uddin.718/"
            defaultColor="white" 
            hoverColor="#3d52ff" 
            animation="bounce" />
    
    </div>

</div>
     </>   
    );
};

export default SocialMedia;
