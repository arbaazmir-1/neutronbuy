import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer,productListPromotionsReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'

const reducer = combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productListPromotions:productListPromotionsReducer,
    cart: cartReducer
})
const cartItemFromStorage = localStorage.getItem('cartItem') ? JSON.parse(localStorage.getItem('cartItem')) : []
const initialState = {
    cart: {
        cartItems: cartItemFromStorage
    }
}
const middleware=[thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store
