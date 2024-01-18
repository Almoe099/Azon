import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, selectProductsArray } from "../../store/product";
import "./ProductIndex.css";

const ProductsIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsArray);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="productsIndexPage">
      <div className="productsIndexDivider"></div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="card">
                <img className="productImage" src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg" alt="Product Image" />
            <div className="card-content">
              <p className="productName">{product.name}</p>
              <p className="productPrice">${product.price}</p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsIndex;
