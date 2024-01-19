import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, selectProduct } from "../../store/product";
import { useEffect } from "react";
import "./ProductShow.css";

const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const product = useSelector(selectProduct(productId));

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="fillerdiv"></div>
      <div className="productCardItem">
        <div className="productImageContainer">
          <img
            className="productImageShow"
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            alt="Product Image"
          />
        </div>

        <div className="productDetailsContainer">
          <h1 className="productNameShow">
            {product.name} jwifawirhu rufhuqwh ucfh uqhwufh qpuihwphf
            ajsdfquwhfexnq uwgpuh wch oqwnui hw{" "}
          </h1>
          <div className="ratingContainer">
            <h3 className="productRatingShow">Rating</h3>
          </div>

          <div className="lineSeparator"></div>

          <h3 className="productPriceShow">${product.price}</h3>

          <div className="productTypeContainer">
            <h5 className="typeContainer">
              <p className="type">Category:</p>
            </h5>
            <h5 className="productCategory">
              <p>{product.category}</p>
            </h5>
          </div>
          <div className="productTypeContainer">
            <h5 className="typeContainer">
              <p className="type">Brand:</p>
            </h5>
            <h5 className="productBrand">
              <p>{product.brand}</p>
            </h5>
          </div>
          <div className="productTypeContainer">
            <h5 className="typeContainer">
              <p className="type">Dimensions:</p>
            </h5>
            <h5 className="productDimensions">
              <p>{product.dimensions}</p>
            </h5>
          </div>
          <div className="productTypeContainer">
            <h5 className="typeContainer">
              <p className="type">Weight:</p>
            </h5>
            <h5 className="productWeight">
              <p>{product.weight}</p>
            </h5>
          </div>

          <div className="lineSeparator"></div>

          <div className="productDescriptionContainer">
            <label className="about">About this item</label>
            <li className="productDescription">{product.description}</li>
            <li className="productDescription">{product.description}</li>
            <li className="productDescription">{product.description}</li>
            <li className="productDescription">{product.description}</li>
            <li className="productDescription">{product.description}</li>
            <li className="productDescription">{product.description}</li>
            <li className="productDescription">{product.description}</li>
          </div>
        </div>
        <div className="cartContainer">
          <h3 className="productPriceShow">${product.price}</h3>
          <span className="free">Free Returns</span>
          <span className="free">Free Delivery</span>
          <h4 className="Availabilty">In Stock</h4>

          <form>
            <div className="quantityContainer">
              <span className="quantity"> Quantity:</span>
              <select className="productQuantity" name="productQuantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <button className="cartButton" type="submit">
              Add to Cart
            </button>
          </form>

          <button className="buyButton" type="submit">
            Buy Now
          </button>
          <span>Payment</span>
          <span>Payment</span>
          <span>Payment</span>
          <span>Payment</span>
          <span>Payment</span>
        </div>
      </div>
    </>
  );
};

export default ProductShow;
