import React from 'react';
import t1 from "../../Files/t1.PNG"
import t2 from "../../Files/t2.PNG"

const Temperature = () => {
    return (
        <div>
            <br />
<br />
<h1 style={{textAlign :"center"}} > It's a temparature app
</h1>
<br />
1. Users will be able to see city's temperature <br />
2. Users need Only type the city name and then it show the result<br />
3. Output shows city name<br />
4. Output shows temperature<br />
5.Output shows temperature condition <br />
6.Condition wise change background image<br />
<br />
<br />

<div  style={{textAlign :"center" }} class="imgBx">

<br />
      <img width={800} src={t1} ></img>

      <br />
      <br />

<br />
      <img width={800} src={t2} ></img>

      <br />
      <br />
  </div>


        </div>
    );
};

export default Temperature;