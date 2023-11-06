
import {legacy_createStore,applyMiddleware,combineReducers} from "redux"
import thunk from "redux-thunk";
import { cartReducer } from "./checkoutprice/reducer";
import { reducer } from "./mylearning/reducer";

const rootReducer=combineReducers({
    reducer,
    cartReducer
})
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))