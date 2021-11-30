// import React from 'react';
// import { Button, Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';

// const NavBar = () => {
//   return (
//     <>
//     <Navbar  sticky="top" collapseOnSelect expand="lg" >
//         <Container>
//             <Navbar.Toggle className="bg-white  " />
//             <Navbar.Collapse className="justify-content-end">
//                 <Nav href="#home">Home</Nav>
//             </Navbar.Collapse>
//         </Container>
//     </Navbar>
// </>
//   );
// };

// export default NavBar;



// import React from 'react';
// import { Container, Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import "./NavBar.css"
// const NavBar = () => {
//     return (
//         <div>
// <nav class="navbar navbar-expand-lg navbar-light bg-black ">
//   <div class="container-fluid justify-content-end">
//     <button class="navbar-toggler bg-white text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse cl text-white" id="navbarNav">
   
//       <ul class="navbar-nav text-white">
//         <li class="nav-item text-white">
//         {/* <Nav.Link as={HashLink}  to="/home#home" className="nav-link active text-white" aria-current="page">Home</Nav.Link> */}
//         <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
//         </li>
//         <li class="nav-item text-white">
//           <a class="nav-link text-white" href="#about">About</a>
//         </li>
//         <li class="nav-item text-white">
//           <a class="nav-link text-white" href="#project">Project</a>
//         </li>
//         <li class="nav-item text-white">

//           <a class="nav-link text-white" href="#skills">Skills</a>
//         </li>
//         <li class="nav-item text-white">
//           <a class="nav-link text-white"  href="#contact">Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

           
           
//         </div>
//     );
// };

// export default NavBar;


import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
      <Navbar  fixed="top"  collapseOnSelect expand="lg"  >
                <Container>
                
                    <Navbar.Toggle className="bg-danger" />
                    <Navbar.Collapse className="justify-content-end bac">
                        <Nav.Link as={HashLink} to="#home" aria-current="page">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="#skills">Skills</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  );
};

export default NavBar;