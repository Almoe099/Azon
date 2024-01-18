import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts, selectProductsArray } from '../../store/product';
import './ProductIndex.css'

const ProductsIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsArray);
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
<div className='productsIndexPage'>
  <div className="productsIndexDivider"></div>
  <div className="products-container">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <div className="card-content">
          <div className="product-image-wrapper">
            <img className='productImage' src="https://images-na.ssl-images-amazon.com/images/I/51Avf7lB49L._AC_UL450_SR450,320_.jpg" alt="Product Image" />
          </div>
          <h1 className='productName'>{product.name}</h1>
          <p className='productPrice'>${product.price}</p>
        </div>
      </div>

    ))}
  </div>
</div>
  );
};

export default ProductsIndex;