import React from 'react';
import Particles from 'react-particles-js';

const Particle = () => {
    return (
        <div>
             <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 10
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}}
  height="30vh"
  width="40vh"
   />
        </div>
    );
};

export default Particle;