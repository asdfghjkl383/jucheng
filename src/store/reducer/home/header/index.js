import HotcityReducer from './Address/Hotcity';
import AllcityReducer from './Address/Allcity';
import {
    combineReducers
} from "redux";

const HeaderReducer = combineReducers( {
    HotcityReducer,
    AllcityReducer
})

export default HeaderReducer