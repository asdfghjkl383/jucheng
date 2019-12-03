import React from 'react';
import {
    BrowserRouter as Router,// 路由器
    Link,// 链接
    withRouter
} from "react-router-dom"
import '../../../../assets/css/search.css'


class Search extends React.Component {
    render(){
        return (
            <div>
                <div className={"search_header"}>
                    <input type="text" holderplace/>
                    <Link to={"/"}>取消</Link>
                </div>
                
            </div>
            
        )
    }
}





export default withRouter(Search)