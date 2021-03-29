import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {Provider} from "react-redux";
import {store} from "./bll/store";
import App2 from "./App2";

ReactDOM.render(
    <Provider store={store}>
        <App2 />
    </Provider>,
  document.getElementById('root')
);

