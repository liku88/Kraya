import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from './reducers/userReducers'
import { orderCreateReducer } from './reducers/orderReducers';
const reducer = combineReducers({
    productList: productListReducer,
    productDetailsList: productDetailReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer
});

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromLocalStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const paymentMethodFromLocalStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : {}

const intialState = {
    cart: { cartItems: cartItemsFromLocalStorage, shippingAddress: shippingAddressFromLocalStorage, paymentMethod: paymentMethodFromLocalStorage },
    userLogin: { userInfo: userInfoFromLocalStorage },

};
const middleware = [thunk];
const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(...middleware)));


export default store;