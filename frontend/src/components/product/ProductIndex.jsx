import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, selectProductsArray } from "../../store/product";
import { Link } from "react-router-dom";
import "./ProductIndex.css";

const ProductsIndex = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsArray, shallowEqual);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  // if (!products.photoUrl) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="productsIndexPage">
      <div className="productsIndexDivider"></div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="card">
                <img className="productImage" src={product.photoUrl[0]} alt="Product Image" />
            <div className="card-content">
              <Link to={`/products/${product.id}`}>
                <p className="productName">{product.name}</p>
              </Link>
              <p className="productReview">5 Stars</p>
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
