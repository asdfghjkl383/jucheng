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
import floorShowListActionCreator from "../../store/actionCreator/FloorShow"

class FloorShow extends React.Component{
    render(){
    // console.log(1111,)
        return (
            <div>
                {
                    this.props.floorShowList.map(v=>(
                        <div key={v.cat_id}>
                            <div>{v.title}</div>
                            {
                                v.list.map(v=>(
                                    <div>
                                        <p>{v.schedular_name}</p>
                                    </div>
                                ))
                            }
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