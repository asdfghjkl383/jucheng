import React from 'react';
import './App.css';
import TabBar from "./components/common/TabBar"
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  // withRouter
} from "react-router-dom"
import Detail from "./views/Detail";
function App() {
    return (
      <div className="App">
        <Router forceRefresh={true}>
          <Switch>
            <Route path={"/detail/:id"} component={Detail}></Route>
            <Route path={"/"} component={TabBar}></Route>
          </Switch>
        </Router>
      </div>
    )
  
}

export default App;
