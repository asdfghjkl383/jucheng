import ShowList from "./ShowList";
import VipHomeList from "./vipHome";
import HotsRecommendList from "./HotsRecommend";
import ShowsLibraryList from "./ShowsLibrary";
import TourRecommendList from "./TourRecommend"
import Detail from "./Detial";
import Related from "./Related";
import {combineReducers} from "redux";
import MoreTourShowList from "./MoreTourShowList"
import FloorShowList from "./FloorShow"
export default combineReducers({
    ShowList,
    vipHome:VipHomeList,
    hotsRecommend:HotsRecommendList,
    showsLibrary:ShowsLibraryList,
    Detail,
    TourRecommend:TourRecommendList,
    MoreTourShowList,
    FloorShow:FloorShowList,
    Related
})