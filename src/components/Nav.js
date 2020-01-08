import React from 'react';
import Fb from '../images/fb.png';
import Git from '../images/git.png';
import Logo from '../images/logo.png';

function Nav() {
    return (
      
        <div class='nav'>
          <div class='logo'>
            <img src={Logo}/>
          </div>
            <div class='contact'>
              <a href="https://github.com/romulanik?tab=repositories"><img src={Git}/> </a>
              <a href="https://www.facebook.com/piotr.kwiatkowski.96780671"><img src={Fb}/></a>
              <a class="btn btn-outline-dark btn-lg" href="#" role="button"> Contact me! </a>
          </div>
        </div>
    );
  }

  export default Nav;
  
