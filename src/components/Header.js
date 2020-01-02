import React from 'react';
import Avatar from '../images/avatar.png';
import Bg from '../images/bg.png';

function Header() {
    return (
      <div class='header'>
        <div class="header-items">
          <img src={Avatar}></img>
          </div>
        <div class="header-items">
          <h1> Hello, on my portfolio site</h1>
        </div>
        <div class="header-items">
          <img src={Bg}></img>
          </div>
      </div>
    );
  }

  export default Header;
  