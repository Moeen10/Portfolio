import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props || {}
    const totalReducer = (prevValue, currentValue) => prevValue + currentValue.price

    const total = cart.reduce(totalReducer, 0)

    return (
        <div >
            <div className="Text">
              <h3 >
                Orders : {cart.length}
             </h3>
                <h5>Total Price: ${total.toFixed(2)}</h5><br />
                <h2>Selected Product</h2>
    
                <i class="fas fa-arrow-down"></i>
            </div>

            
            <ul>
                {
                    
                    cart.map(product =>
                        <div className="Output">
                            <div className="imgSize">
                            <img src={product.img} alt="" />

                            </div>
                            <div className="text"><p>{product.name}</p></div>
                            
                        </div>
                        
                    )
                }
            </ul>
        </div>
    );
};

export default Cart;