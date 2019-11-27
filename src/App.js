import React from 'react';
import './App.css';
import TabBar from "./components/common/TabBar"
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <TabBar></TabBar>
    </div>
  );
}

export default App;
