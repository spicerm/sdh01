import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./index.scss";
import "./components/css/bootstrap.min.css";
import store from "./store";

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));
