import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct, selectProduct } from "../../store/product";
import { useEffect, useState } from "react";
import DeliveryComponent from "./date";
import Footer from "../Navigation/Footer";
// import loading from "../../pictures/loading.jpg";
// import loadingCopy from "../../pictures/loadingCopy.jpg";
import "./ProductShow.css";
import { createCart, updateCart, memoizedSelectCarts } from "../../store/cart";
import { useNavigate } from "react-router-dom";


const ProductShow = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product_id = parseInt(productId);
  const navigate = useNavigate();
  const user = useSelector(state => state.session.user);
  const carts = useSelector(memoizedSelectCarts);
  const [quantity, setQuantity] = useState(1)

  const product = useSelector(selectProduct(productId));

  // const [thumbnails, setThumbnails] = useState([loading, loadingCopy]);
  // const [selectedImage, setSelectedImage] = useState(product.photoUrl[0]);

  useEffect(() => {
      dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  // useEffect((product) => {
  //   if(product && product.photoUrl){
  //     setThumbnails(product.photosUrl);
  //     setSelectedImage(thumbnails[0]);
  //   }
  // }, [thumbnails, product]);

  // const handleImageChange = (e) => {
  //   setSelectedImage(e.target.scr);
  //   // console.log(e.target);
  // };

  const handleQuantity = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  }

  const handleCart= async (e) => {
    e.preventDefault();
    if (user) {
      const user_id = user.id;
      const productToAdd = { quantity, product_id, user_id };

      const existingCartItem = carts.find(
        (item) => item.productId === product.id,
      );
      
      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + quantity,
        };
        
        dispatch(updateCart(updatedCartItem));
      } else {
        dispatch(createCart(productToAdd));
      }
    } else {
      navigate('/login');
    }
  

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
            {/* {product.photoUrl && product.photoUrl.map((photo, index) => (
              <label key={index} className="photo-label">
                <input
                  type="radio"
                  name="photo"
                  value={photo}
                  onChange={handleImageChange}
                  checked={selectedImage === photo}
                  className="photo-radio"
                />
                <img
                  src={photo}
                  alt={`photo ${index + 1}`}
                  className={`photo ${
                    selectedImage === photo ? "selected" : ""
                  }`}
                />
              </label>
            ))} */}
          </div>
        <div className="productImageContainer">
          {/* <img
            className="productImageShow"
            // onMouseOver={handleImageChange}
            src={product.photoUrl[0]}
            alt="Product Image"
          /> */}
        </div>
        </div>

        <div className="productDetailsContainer">
          <h1 className="productNameShow">
            {product.name}
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
              <select className="productQuantity" name="productQuantity" value={quantity} onChange={handleQuantity}>
                {Array.from({ length: 10 }, (_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <button className="cartButton"  onClick={handleCart}>
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
      <div className="productFooter">
        <Footer />
      </div>
    </>
  );
};

export default ProductShow;
