import React from 'react';
import './App.css';
import TabBar from "./components/common/TabBar"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"
import Detail from "./views/Detail";
import ShowsLibrary from "./views/showsLibrary";
import MoreTourShowList from "./views/moreTourShowList";
import Theater_one from './views/Theater_one';
import Select from "./views/select";
import Login from './views/login'
import Address from './components/home/header/Address'
function App() {
    return (
      <div className="App">
        <Router forceRefresh={true}>
          <Switch>
            <Route path={"/detail/:id"} component={Detail}></Route>
            <Route path={"/select-seat/:id"} component={Select}></Route>
            <Route path={"/showsLibrary"} component={ShowsLibrary}></Route>
            <Route path={"/moreTourShowList"} component={MoreTourShowList}></Route>
            <Route path={"/login"} component={Login}></Route>
            <Route path={"/selectCity"} component={Address}></Route>
            <Route path={"/theater_one"} component={Theater_one}></Route>
            <Route path={"/"} component={TabBar}></Route>
          </Switch>
        </Router>
      </div>
    ) 
}
export default App;