import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/css/reset.css"
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'lib-flexible'
import axios from "axios"
import store from "./store"
import {Provider} from "react-redux"
React.Component.prototype.$axios=axios;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();