import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, selectProduct } from "../../store/product";
import { useEffect } from "react";
import DeliveryComponent from "./date";
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
            src={product.photoUrl}
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
            <div className="typeContainer">
              <p className="type">Category:</p>
            </div>
            <div className="productCategory">
              <p>{product.category}</p>
            </div>
          </div>
          <div className="productTypeContainer">
            <div className="typeContainer">
              <p className="type">Brand:</p>
            </div>
            <div className="productBrand">
              <p>{product.brand}</p>
            </div>
          </div>
          <div className="productTypeContainer">
            <div className="typeContainer">
              <p className="type">Dimensions:</p>
            </div>
            <div className="productDimensions">
              <p>{product.dimensions}</p>
            </div>
          </div>
          <div className="productTypeContainer">
            <div className="typeContainer">
              <p className="type">Weight:</p>
            </div>
            <div className="productWeight">
              <p>{product.weight}</p>
            </div>
          </div>

          <div className="lineSeparator"></div>

          <div className="productDescriptionContainer">
            <label className="about">About this item</label>
            {product.description.split("*").map((line, index) => {
              return (
                <li className="productDescription" key={index}>{line}</li>
              )
            })}
          </div>
        </div>
        <div className="cartContainer">
          <h3 className="productPriceShow">${product.price}</h3>
          <span className="freeR">Free Returns</span>
          <span className="delivery"><DeliveryComponent /></span>
          <h4 className="Availabilty">In Stock</h4>

          <form>
            <div className="quantityContainer">
            <span className="quantity">Quantity:</span>
            <select className="productQuantity" name="productQuantity" > 
              {Array.from({ length: 10 }, (_, index) => (
              <option key={index + 1} value={index + 1}>{index + 1}</option>
              ))}
            </select>
            </div>
            <button className="cartButton" type="submit">
              Add to Cart
            </button>
          <button className="buyButton" type="submit">
            Buy Now
          </button>

          </form>

        
          <div className="cartFooterContainer">
            <div className="firstFooter">
              <span className="start">Ships from</span>
            </div>
            <div className="SecondFooter">
              <span className="end">Azon.com</span>
            </div>
          </div>

          <div className="cartFooterContainer">
            <div className="firstFooter">
              <span className="start">Sold by</span>
            </div>
            <div className="SecondFooter">
              <span className="end">Azon.com</span>
            </div>
          </div>

          <div className="cartFooterContainer">
            <div className="firstFooter1">
              <span className="start">Returns</span>
            </div>
            <div className="SecondFooter">
              <span className="returns">Eligible for Return, Refund or Replacement within 30 days of receipt</span>
            </div>
          </div>

          <div className="cartFooterContainer">
            <div className="firstFooter">
              <span className="start">Payment</span>
            </div>
            <div className="SecondFooter">
              <span className="returns">Secure transaction</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductShow;
