import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import * as serviceWorker from './serviceWorker';
import {Album,MenuOptions} from './components/Templates/IndexTemplate';
import SignUp from './components/Templates/ContactTemplate';
//TO-DO render only the application and not the components when testing is done

//ReactDOM.render(<TestSideMenu />, document.getElementById('navigationMenu'));
//ReactDOM.render(<NavBar />, document.getElementById('root'));
//ReactDOM.render(<Footer />, document.getElementById('foot'));
ReactDOM.render(<MenuOptions/>,document.getElementById('nav'));
ReactDOM.render(<SignUp/>,document.getElementById('root'))
//ReactDOM.render(<Album/>,document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();