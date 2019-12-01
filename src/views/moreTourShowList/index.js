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
import moreTourShowListActionCreator from "../../store/actionCreator/MoreTourShowList"
import "../../assets/css/moreTourShowList.css"
class ShowsLibrary extends React.Component{
    constructor(){
        super();
        this.state={
            page:1
        }
    }
    render(){
        return (
            <div className="moreTourShowListContainer">
                <div className="header">
                    <Link className="return" to={"/"}>{"<"}</Link>
                    <span>巡回演出</span>
                    <img className="more" src={require("../../assets/images/dot.png")} alt={""}/>
                </div>
                
                <div className="showsLibraryInfo">
                    {
                        this.props.moreTourShowList.map(v=>(
                            <div className="moreTourShowList"  key={v.show_id}>
                                <img className="tourImg " src={v.pic} alt="" />
                                <div className="right">
                                    <div className="tourShowName">{v.show_name}</div>
                                    <p>{v.display_show_time}</p>
                                    <ul className="cityList">
                                        {
                                            v.cityItems.map((v,i)=>(
                                                <li key={v.city_id}>{v.city_name}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                    <input className="loadMore" type="button" value={"加载更多"} onClick={()=>{
                        this.props.getMoreTourShowList.bind(this,this.state.page+1)();
                        this.setState({
                            page:this.state.page+1
                        },function(){
                            console.log(this.state.page)
                        })
                    }}/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getMoreTourShowList.call(this);
    }
}
function mapStateToProps(state){
    return {
        page:state.MoreTourShowList.page,
        moreTourShowList:state.MoreTourShowList.moreTourShowList
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(moreTourShowListActionCreator,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowsLibrary);