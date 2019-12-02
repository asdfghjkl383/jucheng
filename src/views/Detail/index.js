import React from "react";
import "../../assets/css/detail.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import DetailCreator from "../../store/actionCreator/Detial";
class Detail extends React.Component{
    render(){
        const static_data = this.props.static_data;
        return (
            <div className="wrap">
                {
                    <div>
                        <div className="show_box">
                            <img className="brief__bg" src={static_data.pic} alt="" />
                            <div className="detial">
                                <span onClick={()=>this.props.history.go(-1)} className="return">{"<"}</span>
                                <span className="show">演出详情</span>
                            </div>
                            <div className="show_center">
                                <img className="show_box_Img" src={static_data.pic} alt="" />
                                <div className="brief__primary">
                                    <div className="show_box_title">{static_data.show_name}</div>
                                    <div className="show_box_price">￥{static_data.price_range}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="box">
                            <p className="show_box_bottom">{this.props.date}</p>
                            <p className="show_city">{this.props.city_name} | {this.props.venue_name}</p>
                            <div className="show_address">{this.props.venue_address}</div>
                        </div>
                        <div className="intro">
                            <div className="intro__title">演出介绍</div>

                            <div className="intro__content" dangerouslySetInnerHTML={{__html:this.props.desc}}></div>
                        </div>
                    </div>
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.getScheduleInfo.call(this);
    }
}
function mapStateToProps({Detail}){
    return{
        static_data:Detail.static_data,
        date:Detail.data,
        city_name:Detail.city_name,
        desc:Detail.desc.desc,
        venue_name:Detail.venue_name,
        venue_address:Detail.venue_address
    }
}
function mapDispatchProps(dispatch){
    return bindActionCreators(DetailCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchProps)(Detail) ;