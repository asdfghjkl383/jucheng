import React from "react";
import VipHome from "../../components/Home/VipHome";
import HotsRecommend from "../../components/Home/HotsRecommend";
import ShowList from "../../components/Home/ShowList";
class Home extends React.Component{
    render(){
        return (
            <div>
                <HotsRecommend></HotsRecommend>
                <VipHome></VipHome>
                <ShowList></ShowList>
            </div>
        )
    }
}
export default Home;