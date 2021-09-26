import React from 'react';
import Rating from 'react-rating';
import './Product.css'
const Product = (props) => {
    const { name, img,Brand,stock,price,star } = props.product || {}

    return (

        <div className="col-md-4">
        <div class="card mb-3" style={{ "max-width": "800px" }}>
  
          <div>
            <div class="card">
  
              <div className="img_size">
                <img src={img} className="imgc" alt="..." />
              </div>
            <div className="Content">

            <h6 class="card-title"><span>Name</span> : {name}</h6>
              <h6 class="card-title"><span>Brand</span> : {Brand}</h6>
              <h6 class="card-title"><span>Price</span> : ${price}</h6>
              <div className="Star">
              <h6 class="card-title"> <span>Star</span> :</h6> <div className='star2'><Rating 
              initialRating={star}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star "
              /></div>
              
              </div>
             
              <h6 class="card-title"><span>Stock </span> : {stock}</h6>
            </div>
              
  
  
  
              <button
                onClick={() => props.handleAddProduct(props.product)}
                className="btn btn-success button"> <i class="fas fa-baby p-2"></i>
                Add Doctor</button>
  
  
  
            </div>
          </div>
        </div >
  
      </div >

        
  
    


  
  
    );
  };

export default Product;





 