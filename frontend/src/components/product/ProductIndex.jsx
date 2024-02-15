import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, selectProductsArray } from "../../store/product";
import { Link, useSearchParams } from "react-router-dom";
import "./ProductIndex.css";

const ProductsIndex = () => {
  const dispatch = useDispatch();
  let products = useSelector(selectProductsArray, shallowEqual);
  const [params] = useSearchParams();
  
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  // if (!products.photoUrl) {
  //   return <div>Loading...</div>;
  // }

  if (params.get("category")) {
    const categoryParam = params.get("category").replace(/[\W_]/g, ''); 
    const categoryRegex = new RegExp(categoryParam, 'i'); 
  
    products = products.filter(product => {
      const productCategoryWithoutSpaces = product.category.replace(/[\W_]/g, ''); 
      return productCategoryWithoutSpaces.match(categoryRegex);
    });
  }

  


  return (
    <div className="productsIndexPage">
      <div className="productsIndexDivider"></div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`} className="productLink">
            <div className="card">
                <img className="productImage" src={product.photoUrl[0]} alt="Product Image" />
            <div className="card-content">
                <p className="productName">{product.name}</p>
              <p className="productReview">★★★★★</p>
              <p className="productPrice">${product.price}</p>
            </div>
            </div>
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsIndex;
