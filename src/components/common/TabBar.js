import React from 'react';
import "../../assets/css/TabBar.css"
import {
    Route,
    NavLink,
    Switch
} from "react-router-dom"
import Home from "../../views/home"
import Theater from "../../views/theater"
import Ticket from "../../views/ticket"
import My from "../../views/my/index"
import GuardRouter from "../../reducer/GuardRouter"

class TabBar extends React.Component{
    render(){
        return (
                <div className={"tbWrap"}>
                    <ul>
                    <div className="footer">
                        <li className="lf">
                            <NavLink exact to={"/"} className={"home"} activeClassName={"active-home"}>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li className="lf">
                            <NavLink to={"/theater"} className={"theater"} activeClassName={"active-theater"}>
                                <span>剧院</span>
                            </NavLink>
                        </li>
                        <li className="lf">
                            <NavLink to={"/ticket"} className={"ticket"} activeClassName={"active-ticket"}>
                                <span>票夹</span>
                            </NavLink>
                        </li>
                        <li className="lf">
                            <NavLink to={"/my"} className={"my"} activeClassName={"active-my"}>
                                <span>我的</span>
                            </NavLink>
                        </li>
                    </div>
                        <Switch>
                            <Route exact path={"/"} component={Home}></Route>
                            <Route path={"/theater"} component={Theater}></Route>
                            <Route path={"/ticket"} render={()=><GuardRouter component={Ticket}/>}></Route>
                            <Route path={"/my"} render={()=><GuardRouter component={My}/>}></Route>
                        </Switch>
                    </ul>
                </div>
        )
    }
}

export default TabBar;