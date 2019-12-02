import React from "react";
import "../../assets/css/related.css";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import RelatedCreator from "../../store/actionCreator/Detial";
import {Link,withRouter} from "react-router-dom";

class Related extends React.Component{
    render(){
        return (
            <div className="related">
                {
                    this.props.list.map(v=>(
                        <div className="related-cell" key={v.schedular_id}>
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
                <input type="button" value={"查看更多演出"} onClick={()=>{
                    this.props.history.push("/showsLibrary")
                }} />
            </div>
        )
    }
}
function mapStateToProps({Related}){
    return{
        list:Related.list,
        cate_parent_id:Related.list.cate_parent_id
    }
}
function mapDispatchProps(dispatch){
    return bindActionCreators(RelatedCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchProps)(withRouter(Related));