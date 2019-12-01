import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/reset.css"
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible'
import axios from "axios";
import store from "./store";
// import  {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux";
import 'antd-mobile/dist/antd-mobile.css';
React.Component.prototype.$axios = axios;
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
