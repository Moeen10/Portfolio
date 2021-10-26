import { TextField } from '@mui/material';
import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div>
<TextField className="down" id="filled-basic" label="E-mail" variant="filled" /> 
<br />    
<TextField type="password" className="down" id="filled-basic" label="Password" variant="filled" />    
    </div>
    );
};

export default Login;