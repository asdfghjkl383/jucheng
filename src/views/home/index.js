import React from "react" 
import VipHome from "../../components/home/VipHome"
import HotsRecommend from "../../components/home/HotsRecommend"
class Home extends React.Component{
    render(){
        return (
            <div>Home
                <VipHome></VipHome>
                <HotsRecommend></HotsRecommend>
            </div>
        )
    }
}
export default Home;