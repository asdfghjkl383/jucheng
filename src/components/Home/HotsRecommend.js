import React from "react"
import "../../assets/css/hotsRecommend.css"
import {
    Link
} from "react-router-dom"
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
                
                <h3>热门演出</h3><Link className="more" to={"/showsLibrary"}>></Link>
                <li className="hotsRecommend">
                    {
                        this.props.hotsRecommendList.map(v=>(
                            <div className="hotsRecommendInfo" key={v.schedular_url}>
                                <img style={{
                                    width:"100px",
                                    height:"135px"
                                }} src={v.pic} alt={""}/>
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