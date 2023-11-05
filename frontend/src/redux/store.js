
import {legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { cartReducer } from "./checkoutprice/reducer";


export const store = legacy_createStore(cartReducer,applyMiddleware(thunk))