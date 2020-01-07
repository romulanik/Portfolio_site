import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// components //
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';
// components //

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Nav/>, document.getElementById('nav'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Main/>, document.getElementById('main'));