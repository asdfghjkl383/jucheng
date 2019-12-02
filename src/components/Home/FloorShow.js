import React,{Fragment} from "react"
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
import floorShowListActionCreator from "../../store/actionCreator/FloorShow"
import "../../assets/css/floorShow.css"

class FloorShow extends React.Component{
    render(){
        return (
            <div className="floorShowContainer">
                {
                    this.props.floorShowList.map(v=>(
                        <div className="floorShow" key={v.cat_id}>
                            <h3 className="floorShowType">{v.title}</h3><Link className="more" to={"/showsLibrary"}>></Link>
                            <div className="floorShowInfoContainer">
                                {
                                    v.list.map((v,i)=>(
                                        <div key={i}>
                                            <Link to={"/detail/"+v.sche_id}>{i===0?<div className="firstFloorShow">
                                                <img className="firstFloorShowImg" src={v.pic} alt=""/>
                                                <div className="firstFloorShowRight">
                                                    <h3>{v.display_show_time}</h3>
                                                    <p>{v.schedular_name}</p>
                                                    <h5>{v.city_name} | {v.venue_name}</h5>
                                                </div>
                                            </div>:""}</Link>
                                            <Link to={"/detail/"+v.sche_id}>{i>0?<div className="floorShowInfo" key= {v.schedular_url}>
                                                <img style={{
                                                    width:"100px",
                                                    height:"135px"
                                                }} src={v.pic} alt=""/>
                                                <h5>{v.schedular_name}</h5>
                                            </div>:""}</Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.getFloorShowList.call(this);
    }
}
function mapStateToProps(state){
    // console.log(123,state);
    return {
        floorShowList:state.FloorShow
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(floorShowListActionCreator,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(FloorShow);