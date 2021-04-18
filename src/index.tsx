import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./bll/store";
import AppForeNodeJs from "./AppForNodeJs";


const REACT_VERSION = React.version;
console.log(REACT_VERSION)



ReactDOM.render(
    <Provider store={store}>
        <AppForeNodeJs />
    </Provider>,
  document.getElementById('root')
);

