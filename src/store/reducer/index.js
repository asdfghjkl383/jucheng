import ShowList from "./ShowList";
<<<<<<< Updated upstream
import VipHomeList from "./vipHome";
import HotsRecommendList from "./HotsRecommend";
import ShowsLibraryList from "./ShowsLibrary";
import TourRecommendList from "./TourRecommend"
=======
import Detail from "./Detial";
import Related from "./Related";
>>>>>>> Stashed changes
import {combineReducers} from "redux";
import Detail from "./Detial";
import MoreTourShowList from "./MoreTourShowList"
import FloorShowList from "./FloorShow"
export default combineReducers({
    ShowList,
<<<<<<< Updated upstream
    vipHome:VipHomeList,
    hotsRecommend:HotsRecommendList,
    showsLibrary:ShowsLibraryList,
    Detail,
    TourRecommend:TourRecommendList,
    MoreTourShowList,
    FloorShow:FloorShowList
=======
    Detail,
    Related
>>>>>>> Stashed changes
})