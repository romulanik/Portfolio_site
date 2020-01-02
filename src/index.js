import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import Header from './components/Header';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Contact />, document.getElementById('contact'));
ReactDOM.render(<Header />, document.getElementById('header'));