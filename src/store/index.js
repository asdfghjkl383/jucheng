import ShowListReducer from "./reducer";
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
export default createStore(ShowListReducer,applyMiddleware(thunk));