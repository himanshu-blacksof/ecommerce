// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../Data';

function Homscreen() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('/api/products');
  //     setProducts(result.Data);
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <h1>Featured Product</h1>
      <div className="products">
        {Data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <Link to={`/product/${product.slug}`}>
              <p>{product.name}</p>
            </Link>
            <p>
              <strong>${product.price}</strong>
            </p>
            <div className="product_button">
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Homscreen;
