import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
const reducer = combineReducers({
    productList: productListReducer,
    productDetailsList: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const intialState = {
    cart: { cartItems: cartItemsFromLocalStorage },
    userLogin: { userInfo: userInfoFromLocalStorage }
};
const middleware = [thunk];
const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;