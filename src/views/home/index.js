import React from "react";
import VipHome from "../../components/Home/VipHome";
import HotsRecommend from "../../components/Home/HotsRecommend";
import ShowList from "../../components/Home/ShowList";
import TourRecommend from "../../components/Home/TourRecommend"
import FloorShow from "../../components/Home/FloorShow"
class Home extends React.Component{
    render(){
        return (
            <div>
                <HotsRecommend></HotsRecommend>
                <TourRecommend></TourRecommend>
                {/* <VipHome></VipHome> */}
                <FloorShow></FloorShow>
                <ShowList></ShowList>
            </div>
        )
    }
}
export default Home;