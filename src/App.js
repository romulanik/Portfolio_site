import React from 'react';
import './App.css';
import Logo from './images/logo.png';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <body>
      <div class='nav'>
        {/* P to remove */}
          <p><img src={Logo}/></p>
          <div id='contact'>
        </div>
      </div>
      <div id='header'>
      </div>
      <div id='main'>
        {/* Do zrobienia */}
      </div>
      <div id='footer'>
        <h2>© Website designed by Piotr Kwiatkowski 2020</h2>
      </div>
    </body>
  );
}

export default App;

