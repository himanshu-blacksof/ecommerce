import { Link } from 'react-router-dom';
import Data from '../Data';
function Homscreen() {
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
