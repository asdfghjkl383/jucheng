import ShowList from "./ShowList";
import VipHomeList from "./vipHome";
import HotsRecommendList from "./HotsRecommend";
import ShowsLibraryList from "./ShowsLibrary";
import {combineReducers} from "redux";
export default combineReducers({
    ShowList,
    vipHome:VipHomeList,
    hotsRecommend:HotsRecommendList,
    showsLibrary:ShowsLibraryList
})