import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { fetchSearch } from "../../store/search";
import "../product/ProductIndex.css";


const SearchIndex = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  useEffect(() => {
    const query = location.search.split("=")[1];
    if (query) {
      dispatch(fetchSearch(query));
    }
  }, [dispatch, location]);


  
  const results = useSelector((state) => state.search);
  const searchResults = results?.search || [];
  const products = Object.values(searchResults);

  return (
    <div className="productsIndexPage">
      <div className="productsIndexDivider"></div>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
            <div className="card">
                <img className="productImage" src={product.photoUrl[0]} alt="Product Image" />
            <div className="card-content">
                <p className="productName">{product.name}</p>
              <p className="productReview">5 Stars</p>
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

export default SearchIndex;