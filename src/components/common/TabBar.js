import React from 'react';
import "../../assets/css/TabBar.css"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom"
import Home from "../home"
import Theater from "../theater"
import Ticket from "../ticket"
import My from "../my"
import Login from "../login"

class TabBar extends React.Component{
    render(){
        return (
                <Router>
                    <ul>
                    <div class="footer">
                        <li class="lf">
                            <NavLink exact to={"/"} className={"home"} activeClassName={"active-home"}>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li class="lf">
                            <NavLink to={"/theater"} className={"theater"} activeClassName={"active-theater"}>
                                <span>剧院</span>
                            </NavLink>
                        </li>
                        <li class="lf">
                            <NavLink to={"/ticket"} className={"ticket"} activeClassName={"active-ticket"}>
                                <span>票夹</span>
                            </NavLink>
                        </li>
                        <li class="lf">
                            <NavLink to={"/my"} className={"my"} activeClassName={"active-my"}>
                                <span>我的</span>
                            </NavLink>
                        </li>
                    </div>
                        <Switch>
                            <Route exact path={"/"} component={Home}></Route>
                            <Route path={"/theater"} component={Theater}></Route>
                            <Route path={"/ticket"} component={Ticket}></Route>
                            <Route path={"/my"} component={My}></Route>
                            <Route path={"/login"} component={Login}></Route>
                        </Switch>
                    </ul>
                </Router>
        )
    }
}
export default TabBar;