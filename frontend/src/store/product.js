import { csrfFetch } from "./csrf";

const GET_PRODUCTS = 'product/GET_PRODUCTS'
const GET_PRODUCT = 'product/GET_PRODUCT'

export const getProducts = () => {
    return {
      type: GET_PRODUCTS,
      products
    };
};

export const getProduct = (productId) => {
    return {
      type: GET_PRODUCT,
      productId
    };
};

export const selectProductsArray = (state) => Object.values(state.product);
export const selectProduct = (productId) => state => state.products[productId]

export const fetchProducts = () => async dispatch => {
    const res = await csrfFetch(`api/products`)
    const data = await res.json()
    if (res.ok){
        dispatch(getProducts())
    }
}

export const fetchProduct = (productId) => async dispatch => {
    const res = await csrfFetch(`api/products${productId}`)
    const data = await res.json()
    if (res.ok){
        dispatch(getProduct(data))
    }
}

const productsReducer = (state = {}, action) => {
    let newState = {...state}
    switch(action.type){
        case GET_PRODUCTS:
            newState = {...action.products}
            return newState
        case GET_PRODUCT: 
            newState[action.product.id] = action.product
            return newState
        default:
            return state
    }
}

export default productsReducer