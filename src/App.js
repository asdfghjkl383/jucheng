import React from 'react';
import './App.css';
import TabBar from "./components/common/TabBar"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // withRouter
} from "react-router-dom"
import Detail from "./views/Detail";
import ShowsLibrary from "./views/showsLibrary";
import MoreTourShowList from "./views/moreTourShowList"
<<<<<<< Updated upstream
import Theater from './views/theater'
import Theater_one from './views/Theater_one'
import Theater_two from './views/Theater_two'

=======
import Select from "./views/select";
import Pay from "./views/pay";
>>>>>>> Stashed changes
function App() {
    return (
      <div className="App">
        <Router forceRefresh={true}>
          <Switch>
            <Route path={"/detail/:id"} component={Detail}></Route>
            <Route path={"/select-seat/:id"} component={Select}></Route>
            <Route path={"/pay/:id"} component={Pay}></Route>
            <Route path={"/showsLibrary"} component={ShowsLibrary}></Route>
            <Route path={"/moreTourShowList"} component={MoreTourShowList}></Route>
            <Route path={"/theater"} component={Theater}></Route>

            <Route path={"/theater_one"} component={Theater_one}></Route>
            <Route path={"/theater_two"} component={Theater_two}></Route>


            <Route path={"/"} component={TabBar}></Route>
          </Switch>
        </Router>
      </div>
    )
  
}

export default App;
