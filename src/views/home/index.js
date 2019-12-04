import React from "react";
import VipHome from "../../components/home/VipHome";
import HotsRecommend from "../../components/home/HotsRecommend";
import ShowList from "../../components/home/ShowList";
import TourRecommend from "../../components/home/TourRecommend"
import FloorShow from "../../components/home/FloorShow"
import Header from "../../components/home/header/header"
import LunBo from "../../components/home/LunBo"
class Home extends React.Component{
    render(){
        return (
            <div>
                <Header></Header>
                <LunBo></LunBo>
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