import React from 'react'
import {createStore} from "redux"
import '../../../assets/css/homeHeader.css'
// import '../assets/css/TabBar.css'
import Address from "./Address"
import Search from "./Search"
import {
    // BrowserRouter as Router,// 路由器
    Link,// 链接
    withRouter
} from "react-router-dom"


class Header extends React.Component {
    constructor(){
        super();
        this.state={
            
        }
    }


    render(){
        return (
            <div>
                <div className={"homeHeader"} >
                <div className={"select"}   >
                    <Link className={"homeMap"} to={"/selectCity"} >
                    全国
                    {/* {this.props.location.state.name} */}
                    </Link>
                </div>
                <Link className={"heard_search"}   to={"/search"}>
                    <div className={"search_content"}>搜索热门演出</div>
                </Link>
                </div>
            </div>
        )
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
}


export default withRouter(Header)