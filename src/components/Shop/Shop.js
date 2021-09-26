import './Shop.css'
import { useEffect,useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';



const Shop = () => {
    const [product,setProduct] = useState([])
   useEffect(()=>{
       fetch('./products.JSON')
       .then(res => res.json())
       .then(data => setProduct(data))
   }
   ,[]);

   const [cart,setCart] = useState([])
   const handleAddProduct = (product) => {

    const newCart = [...cart, product]
    setCart(newCart)
  }
    return (
        <div>
        < div className="container">
        <div className="row">
          <div className="col-md-9">


            <div className="row">
              {
                product.map(product => 
                    <Product 
                    key = {product.key}
                    product={product}
                    handleAddProduct={handleAddProduct}
                     />
                    )
              }


            </div>
          </div>
          <div className="col-md-3 text-white cart-sec pt-5">

            <Cart cart={cart} />
          </div>
        </div>
      </div>

        </div>
    );
};

export default Shop;





