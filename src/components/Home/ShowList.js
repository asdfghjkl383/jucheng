import "../../assets/css/showList.css";

import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import ShowListCreator from "../../store/actionCreator/ShowList";
import {Link,withRouter} from "react-router-dom";

class ShowList extends React.Component{
    render(){
        return (
            <div className="showList">
                <h3 className="recommend">为你推荐</h3>
                {
                    this.props.list.map(v=>(
                        <div className="recommend-cell" key={v.schedular_id}>
                            <Link to={"/detail/"+v.schedular_id}>
                                <img className="listImg" src={v.pic} alt="" />
                                <div className="time">{v.start_show_time}</div>
                                <h3 className="listName">{v.name}</h3>
                                <p className="city">{v.city_name}|{v.venue_name}</p>
                                <p className="price">￥{v.min_price}起</p>
                            </Link>
                        </div>
                    ))
                }
                <input type="button" value={"加载更多"} onClick={this.props.getShowList.bind(this,this.props.page+1)} />
            </div>
        )
    }
    // componentWillMount(){
    //     // this.props.getShowList.call(this);
    //     if(this.props.schedular_id){
    //         this.props.getShowList.call(this);
    //     }
    // }
    componentDidMount(){
        this.props.getShowList.call(this);
    }
    
}
function mapStartToProps({ShowList}){
    return{
        list:ShowList.list,
        page:ShowList.page
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(ShowListCreator,dispatch);
}
export default connect(mapStartToProps,mapDispatchToProps)(withRouter(ShowList));