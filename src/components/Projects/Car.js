import React from 'react';
import car from "../../Files/carW.PNG"
import c1 from "../../Files/c1.png"
import c2 from "../../Files/c2.png"
import c3 from "../../Files/c3.png"
import c4 from "../../Files/c4.png"
import c5 from "../../Files/c5.png"
import c6 from "../../Files/c6.png"
import c7 from "../../Files/c7.png"
import c8 from "../../Files/c8.png"
import c9 from "../../Files/c9.png"
import c10 from "../../Files/c10.png"

const Car = () => {
    return (
        <div>
<br />
<br />
<h1 style={{textAlign :"center"}} >Car Shop</h1>
<br />
1. Users will be able to buy cars in this project. <br />
2. Users need to register. You have to login.<br />
3. Users will be able to buy cars<br />
4. They can go to the dashboard and see which car they bought.<br />
5. They can delete any order if they want.<br />
6. Admin will approve the purchase of the car. If the admin disapproves, the user will be able to see the disapproval <br />written next to that vehicle in his profile<br />
7. Admin will be able to see what items the user ordered<br />
8. If the admin wants, he can make another admin<br />
9. Admin can add new car details<br />
10. If you want, you can delete the details of any other vehicle      <br />

<br />

<br />
<div  style={{textAlign :"center" , width: "fitContent" ,blockSize: "fitContent"}} class="imgBx">
<h3  >This is Landing page</h3>
<br />
      <img  src={car} ></img>

      <br />
      <br />
  
  
      <h3  >Here shows all service
</h3>
      <br />
      <img  src={c1} ></img>


      <br />
      <br />
  
  
      <h3  >Login Page
</h3>
      <br />
      <img  src={c2} ></img>


      <br />
      <br />
  
  
      <h3  >Registration
</h3>
      <br />
      <img  src={c3} ></img>

      <br />
      <br />
  
  
      <h3  >User dashboard

</h3>
      <br />
      <img  src={c4} ></img>

      <br />
      <br />
  
  
      <h3  >User total order details

</h3>
      <br />
      <img  src={c5} ></img>
      <br />
      <br />
  
  
      <h3  >Review Section

</h3>
      <br />
      <img  src={c6} ></img>

      <br />
      <br />
  
  
      <h3  >Total Order by user and admin can see all of this orders admin can delete admin can approve orders also

</h3>
      <br />
      <img  src={c7} ></img>

      <br />
      <br />
  
  
      <h3  >Add new Items
</h3>
      <br />
      <img  src={c8} ></img>

      <br />
      <br />
  
  
      <h3  >Admin can add others to admin in this section
</h3>
      <br />
      <img  src={c9} ></img>
      <br />
      <br />
  
  
      <h3  >Admin can delete any service

</h3>
      <br />
      <img  src={c10} ></img>
    </div>
    <br />
    <br />
    
  </div>
    );
};

export default Car;