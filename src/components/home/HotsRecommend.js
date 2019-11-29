import React from "react"
import store from "../../store"
import "../../assets/css/home/hotsRecommend.css"
import {
    connect
} from "react-redux"
import {
    bindActionCreators 
} from "redux"
import hotsRecommendActionCreator from "../../store/actionCreator/hotsRecommend"

class HotsRecommend extends React.Component{
    render(){
        return (
            <div className="hotsRecommendContainer">
                <h3>热门演出</h3><span>></span>
                <li className="hotsRecommend">
                    {
                        this.props.hotsRecommendList.map(v=>(
                            <div className="hotsRecommendInfo" key={v.schedular_url}>
                                <img style={{
                                    width:"100px",
                                    height:"135px"
                                }} src={v.pic}/>
                                <h5>{v.show_name}</h5>
                            </div>
                        ))
                    }
                </li>
            </div>
        )
    }
    componentDidMount(){
        this.props.getHotsRecommendList.call(this);
    }
}
function mapStateToProps(state){
    return {
        hotsRecommendList:state.hotsRecommend
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(hotsRecommendActionCreator,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(HotsRecommend);