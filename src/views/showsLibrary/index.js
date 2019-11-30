import React from "react"
import {
    connect
} from "react-redux"
import {
    Link
} from "react-router-dom"
import {
    bindActionCreators
} from "redux"
import showsLibraryActionCreator from "../../store/actionCreator/ShowsLibrary"
import "../../assets/css/showsLibrary.css"
class ShowsLibrary extends React.Component{
    render(){
        return (
            <div className="showsLibraryContainer">
                <Link className="return" to={"/"}>{"<"}</Link>
                <span>演出</span><img className="more" src={require("../../assets/images/dot.png")} alt={""}/>
                <div className="nav-address">
                    <div className="nav">
                        <li className="firstLi" schedular_id={"1"} onClick={console.log(document.querySelector(".firstLi"))}>全部</li>
                        {
                            this.props.cityList.map(v=>(
                                <li onClick={this.tabCity.bind(this,v.category_id)} key={v.category_id}>{v.name}</li>
                            ))
                        }
                    </div>
                </div>
                <div className="address">
                        全国<img src={require("../../assets/images/position.png")} alt={""}/>
                </div>
                <div className="showsLibraryInfo">
                    {
                        this.props.showsLibraryList.map(v=>(
                            <div className="recommend-cell"  key={v.schedular_id}>
                                <div>
                                    <img className="listImg" src={v.pic} alt="" />
                                    <div className="time">{v.start_show_time}</div>
                                    <h3 className="listName">{v.name}</h3>
                                    <p className="city">{v.city_name}|{v.venue_name}</p>
                                    <p className="price">￥{v.min_price}起</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        )
    }
    tabCity(id,e){
        const lis = Array.prototype.slice.call(document.querySelectorAll(".nav li"));
        lis.map(v=>{
            v.style.color="black"
            v.style.borderBottom="none"
        })
        e.target.style.color="red";
        e.target.style.borderBottom="1px solid red";
    }
    componentDidMount(){
        this.props.getShowsLibraryList.call(this);
        this.props.getCity.call(this);
    }
}
function mapStateToProps(state){
    // console.log("state:",state.showsLibrary.city);
    return {
        showsLibraryList:state.showsLibrary.showsLibraryList,
        cityList:state.showsLibrary.city
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(showsLibraryActionCreator,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowsLibrary);