import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, selectProduct } from "../../store/product";
import { useEffect, useState } from "react";
import DeliveryComponent from "./date";
import Footer from "../Navigation/Footer";
import loading from "../../pictures/loading.jpg";
import loadingCopy from "../../pictures/loadingCopy.jpg";
import "./ProductShow.css";
import { createCart, updateCart, memoizedSelectCarts } from "../../store/cart";
import { useNavigate } from "react-router-dom";
import { ReviewRating, Rating } from "../review/Rating";
import ReviewIndex from "../review/ReviewIndex";
import * as modalActions from "../../store/modal";
import ReviewForm from "../review/ReviewForm";
import { selectReviewProductArray, fetchReviews } from "../../store/review";

const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product_id = parseInt(productId);
  const navigate = useNavigate();
  const user = useSelector((state) => state.session.user);
  const carts = useSelector(memoizedSelectCarts);
  const [quantity, setQuantity] = useState(1);

  const product = useSelector(selectProduct(productId));

  const [thumbnails, setThumbnails] = useState([loading, loadingCopy]);
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);

  const modalType = useSelector(
    (state) => state.modal.type === "SHOW_REVIEW_MODAL"
  );
  const [loaded, setLoaded] = useState(false);

  let reviewSum = 0;
  let reviewAverage = 0;

  useEffect(() => {
    dispatch(fetchReviews());
    dispatch(fetchProduct(productId))
      .then(() => setLoaded(true))
      .catch(() => setLoaded(true));
  }, [dispatch, productId]);

  let reviews = useSelector((state) =>
    selectReviewProductArray(state, product_id)
  );
  let reviewCount = 0;

  reviews.forEach((review) => {
    reviewSum += review.rating;
    reviewCount += 1;
  });

  if (reviewCount > 0) {
    reviewAverage = (reviewSum / reviewCount).toFixed(1);
  }

  let reviewAmount;

  if (reviewCount === 1) {
    reviewAmount = <span id="reviewAmountH1">{reviewCount} rating</span>;
  } else {
    reviewAmount = <span id="reviewAmountH1">{reviewCount} ratings</span>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(modalActions.showModal("SHOW_REVIEW_MODAL"));
  };

  useEffect(() => {
    if (product && product.photoUrl) {
      setThumbnails(product.photoUrl);
      setSelectedImage(product.photoUrl[0]);
    }
  }, [product]);

  const handleImageChange = (photo) => {
    setSelectedImage(photo);
  };

  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleCart = async (e) => {
    e.preventDefault();
    if (user) {
      const user_id = user.id;
      const productToAdd = { quantity, product_id, user_id };

      const existingCartItem = carts.find(
        (item) => item.productId === product.id
      );

      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + quantity,
        };

        dispatch(updateCart(updatedCartItem));
        navigate("/cart");
      } else {
        dispatch(createCart(productToAdd));
        navigate("/cart");
      }
    } else {
      navigate("/login");
    }
  };

  const handleBuyNow = () => {
    navigate("/checkoutitem");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="fillerdiv"></div>
      <div className="productCardItem">

        <div className="leftColumn">

          <div className="imageCarousel">
            {thumbnails.map((photo, index) => (
              <label key={index} className="photo-label">
                <input
                  type="radio"
                  name="photo"
                  value={photo}
                  // onChange={}
                  // checked={selectedImage === photo}
                  className="photo-radio"
                />
                <img
                  src={photo}
                  alt={`photo ${index + 1}`}
                  className={`photo ${
                    selectedImage === photo ? "selected" : ""
                  }`}
                  onClick={() => handleImageChange(photo)}
                />
              </label>
            ))}
          </div>

          <div className="productImageContainer">
            <img
              className="productImageShow"
              src={selectedImage}
              alt="Product Image"
            />
          </div>
          
        </div>

        <div className="productDetailsContainer">

          <h1 className="productNameShow">{product.name}</h1>
          <div className="ratingContainer">
            <h3 className="productRatingShow">★★★★★</h3>
            <Rating rating={product.rating} />
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

          <label className="about">About this item</label>
          <ul className="productDescriptionContainer">
            {product.description.split(".").map((line, index) => {
              return (
                <li className="productDescription" key={index}>
                  {line}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cartContainer">
          <h3 className="productPriceShow">${product.price}</h3>
          <span className="freeR">Free Returns</span>
          <span className="delivery">
            <DeliveryComponent />
          </span>
          <h4 className="Availabilty">In Stock</h4>

          <form>
            <div className="quantityContainer">
              <span className="quantity">Quantity:</span>
              <select
                className="productQuantity"
                name="productQuantity"
                value={quantity}
                onChange={handleQuantity}
              >
                {Array.from({ length: 10 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <button className="cartButton" onClick={handleCart}>
              Add to Cart
            </button>
            <button className="buyButton" onClick={handleBuyNow}>
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
              <span className="returns">
                Eligible for Return, Refund or Replacement within 30 days of
                receipt
              </span>
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
      {/* <div className="reviewDivider"></div> */}

      <div className="reviewContainer">
        <div className="reviewDivider"></div>
        <div id="productReviewOuterDiv">
          <div id="productReviewDiv">
            <h1 id="customerReviewsH1">Customer Reviews</h1>
            <div id="customerRatingsDiv">
              <div id="customerRatingsDivInner">
                <ReviewRating ReviewRating={product.rating} />
                <span id="reviewAverageSpan">{reviewAverage} out of 5</span>
              </div>
              <h1 id="reviewAmountH1">{reviewAmount}</h1>
            </div>
          </div>
          <div id="writeReviewDiv">
            <h1 id="reviewProductTextH1">Review this product</h1>
            <h1 id="shareYourThoughtsH1">
              Share your thoughts with other customers
            </h1>
            <div id="createReviewDiv">
              {modalType && <ReviewForm productId={product_id} />}
              {user ? (
                <button id="reviewButtonOne" onClick={handleClick}>
                  Write a customer review
                </button>
              ) : (
                <p>no</p>
              )}
            </div>
          </div>
        </div>
        <div className="reviewDivider"></div>
        <ReviewIndex product={product} />
      </div>
      
      <div className="productFooter">
        <Footer />
      </div>
    </>
  );
};

export default ProductShow;
