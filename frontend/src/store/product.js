import { csrfFetch } from "./csrf";
import { REMOVE_USER } from "./session";

export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';
export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';


export const recieveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
});


export const recieveProduct = (product) => ({
  type: RECEIVE_PRODUCT,
  product,
});

export const selectProductsArray = (state) => Object.values(state.products);

export const selectProduct = (productId) => (state) => {
  return state.products[productId]
};


export const fetchProducts = () => async (dispatch) => {
  const res = await csrfFetch("/api/products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const productData = await res.json();
  dispatch(recieveProducts(productData));
};


export const fetchProduct = (productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const productData = await res.json();
  dispatch(recieveProduct(productData));
};


const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return { ...state, ...action.products };
    case RECEIVE_PRODUCT:
      return { ...state, [action.product.id]: action.product };
    case REMOVE_USER:
      return {}
    default:
      return state;
  }
};

export default productsReducer;