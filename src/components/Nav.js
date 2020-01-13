import React from 'react';
import Fb from '../images/fb.png';
import Git from '../images/git.png';
import Logo from '../images/logo.png';
import Scroll from '../functions/scroll.js';

function Nav() {
    return (
        <div class='nav'>
          <div class='logo'>
            <img src={Logo} alt="magiczna_czapka"/>
          </div>
            <div class='contact'>
              <a href="https://github.com/romulanik?tab=repositories"><img src={Git} alt="github_logo"/> </a>
              <a href="https://www.facebook.com/piotr.kwiatkowski.96780671"><img src={Fb} alt="facebook_logo"/></a>
              <a class="btn btn-outline-dark btn-lg" href="#" role="button"> Contact me! </a>
          </div>
        </div>
    );
  }

  export default Nav;
  
