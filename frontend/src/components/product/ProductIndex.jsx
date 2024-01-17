import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { fetchProducts, selectProductsArray } from '../../store/product';

const ProductsIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsArray);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
<ul className='productsIndexPage'>
  <div className="productsIndexDivider"></div>
  <div className="products-container">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <div className="card-content">
          <div className="product-image-wrapper">
            <img className='productImage' src="https://images-na.ssl-images-amazon.com/images/I/51Avf7lB49L._AC_UL450_SR450,320_.jpg" alt="Product Image" />
          </div>
          <p className='productName'>{product.name}</p>
          <p className='productPrice'>${product.price}</p>
        </div>
      </div>

    ))}
  </div>
</ul>
  );
};

export default ProductsIndex;