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
            <div className="card-content">
                <img src="LEGO Icons Bouquet of Roses, Home Décor Artificial Flowers, Gift for Her or Him for Anniversary and Valentine’s Day, Botanica" alt="Product Image" />
              <h1 className="productName">{product.name}</h1>
              <p className="productPrice">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsIndex;
