import { csrfFetch } from "./csrf";
import { createSelector } from "reselect";
import { REMOVE_USER } from "./session";

export const RECEIVE_CARTS = "cart/RECEIVE_CARTS";
export const RECEIVE_CART = "cart/RECEIVE_CART";
export const REMOVE_CART = "cart/REMOVE_CART";

export const receiveCarts = (carts) => ({
  type: RECEIVE_CARTS,
  carts,
});

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart,
});

export const removeCart = (cartId) => ({
  type: REMOVE_CART,
  cartId,
});

export const selectCart = (cartId) => (state) => {
  return state.cart[cartId];
};

export const selectCarts = (state) => (state.cart) || {};
// const selectCartItems = (state) => state?.cartItems || {};

export const memoizedSelectCarts = createSelector([selectCarts], (carts) =>
  Object.values(carts)
);

export const fetchCarts = () => async (dispatch) => {
  const res = await csrfFetch(`/api/carts`);

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveCarts(data));
  }
};

export const fetchCart = (cartId) => async (dispatch) => {
  const res = await csrfFetch(`/api/carts/${cartId}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveCart(data));
  }
};

export const createCart = (cart) => async (dispatch) => {
  const res = await csrfFetch(`/api/carts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveCart(data.cart));
  }
};

export const updateCart = (cart) => async (dispatch) => {
  const res = await csrfFetch(`/api/carts/${cart.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(receiveCart(data.cart));
  }
};

export const deleteCart = (cartId) => async (dispatch) => {
  const res = await csrfFetch(`/api/carts/${cartId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cartId),
  });

  if (res.ok) {
    dispatch(removeCart(cartId));
  }
};

const cartReducer = (state = {}, action) => {
  const newState = { ...state };

  switch (action.type) {
    case RECEIVE_CARTS:
      return action.carts;
    case RECEIVE_CART:
      return { ...state, [action.cart.id]: action.cart };
    case REMOVE_CART:
      delete newState[action.cartId];
      return newState;
    case REMOVE_USER:
      return {};
    default:
      return state;
  }
};

export default cartReducer;
