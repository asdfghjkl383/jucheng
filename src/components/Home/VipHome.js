import React from "react"
import {
    connect
} from "react-redux"
import {
    bindActionCreators
} from "redux"
import vipHomeActionCreator from "../../store/actionCreator/vipHome"
import "../../assets/css/vipHome.css"

class VipHome extends React.Component{
    render(){
        const vipHomeList=this.props.vipHomeList;
        return (
            <div className={"vipContainer"}>
                <p style={{float:"left"}}>优先购票VIP+会员尊享特权</p><p style={{float:"right"}}>99元/年></p>
                <div className={"vipHome"}>
                    <img src={vipHomeList.pic} alt={""}/>
                    <div className={"vipInfo"}>
                        <h3>{vipHomeList.schedular_name}</h3>
                        <span>{vipHomeList.city_name} | {vipHomeList.venue_name}</span>
                        <h4>{vipHomeList.end_time} <font color={"#666"}>开始</font></h4>
                        <div className="start">开售提醒</div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getVipHomeList.call(this);
    }
}
function mapStateToProps(state){
    return {
        vipHomeList:state.vipHome
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(vipHomeActionCreator,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(VipHome);