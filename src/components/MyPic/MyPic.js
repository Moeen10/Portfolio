import React from 'react';
import './MyPic.css'
import pic from "../../Files/FFCL 80027.jpg"
const MyPic = () => {
    return (
<>

<div className="pos">
   <span className="im"><img width="100%" src={pic} alt="" /></span> 
    </div>
</>

    );
};

export default MyPic;