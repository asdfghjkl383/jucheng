import {
    combineReducers
} from "redux"
import vipHomeReducer from "./vipHome"
import hotsRecommendReducer from "./HotsRecommend"
export default combineReducers({
    vipHome:vipHomeReducer,
    hotsRecommend:hotsRecommendReducer
})