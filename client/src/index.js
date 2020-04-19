import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import * as serviceWorker from './serviceWorker';
import NavBar from './components/Navigation/Navbar';
import {TestSideMenu} from './components/Navigation/SideMenu';
import {GridNavBar} from './layouts/Layout';
//ReactDOM.render(<TestSideMenu />, document.getElementById('navigationMenu'));
//ReactDOM.render(<NavBar/>,document.getElementById('navBar'))
ReactDOM.render(<GridNavBar />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();