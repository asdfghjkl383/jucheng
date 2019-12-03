import React from 'react';
import "../../../../assets/css/Address.css"
// import Address from "."
import {
    Link,
    // withRouter
} from "react-router-dom";
import {
    connect
} from "react-redux"
import { 
    bindActionCreators 
} from 'redux';

import AddressActionCreator from "../../../../store/actionCreator/home/header/Address"
// import AllcityReducer from '../../../../store/reducer/home/header/Address/Allcity'

class Address extends React.Component {
    render (){
        return (
            <div> 
                <div className={"city_address"}>
                    <div className={"Addresscity_header"}>
                        <Link className={"replace"} to={"/"}></Link>
                        <h3 className={"select__city"}>城市选择</h3>
                    </div>
                    <div className={"Address_body"}>
                        <div className={"nowcity"}>
                            <p style={{marginTop:"25px"}}  className={"address_p"}>当前城市</p>
                            <div className={"city_bg1"} onClick={this.goback.bind(this)}>全国
                            
                            </div>
                        </div>
                        <div className={"location_city"}>
                            <p className={"address_p"} >定位城市</p>
                            <div  className={"city_bg1"} onClick={this.goback.bind(this)}>
                            全国
                            </div>
                        </div>
                        <div className={"hot"}>
                            <p className={"address_p"} onClick={this.goback.bind(this)}>热门城市</p>
                            {    
                                this.props.hcarr.map((v,item)=>(
                                <Link key={item} to={{pathname:"/",state:{name:v}}} className={"city_bg"}>{v}</Link>
                                ))
                            }    
                        </div>
                        <div className={"all"}>
                            {
                                // console.log(this.props.acarr,999),
                                this.props.acarr.map((v,item)=>(
                                    <Link key={item} to={{pathname:"/",state:{name:v}}} className={/^[A-Z]+$/.test(v)?" letter":"all_city"}>
                                        {v}
                                    </Link>
                                ))
                            }
                        </div>
                        <div className={"addressCity_right"}>
                            <p className={"address_p1"}>当前</p>
                            <p className={"address_p1"}>定位</p>
                            <p className={"address_p1"}>热门</p>
                            {
                                this.props.acarrId.map((v,item)=>(
                                    <div key={item} >
                                        {v}
                                    </div>
                                ))
                            }
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        // console.log(this.props.state.name);
        // this.state(this.props.state.name)
        this.props.getAllcity.call(this)
        this.props.getHotcity.call(this)
    }
    goback(){
        console.log(this.props);
        this.props.history.push("/")
    }
}
// 映射状态
function mapStateToProps(state){
    console.log(state,666)
    return {
        acarr:state.Header.AllcityReducer.acarr,
        acarrId:state.Header.AllcityReducer.acarrId,
        hcarr:state.Header.HotcityReducer.hcarr

    }
}
//映射方法
function mapDispatchToProps(dispatch) {
    return bindActionCreators(AddressActionCreator,dispatch);
}


// export default withRouter(Address)
export default connect(mapStateToProps,mapDispatchToProps)(Address)