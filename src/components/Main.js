import React from 'react';
import React_logo from '../images/react.png';
import Html_css_logo from '../images/html_css.png'
import Bootstrap_logo from '../images/bootstrap.png'

function Main() {
    return (
      <div class='main'>
        <div class="photos">
         <img src={React_logo}></img>
          <p>React</p>
         <img src={Html_css_logo}></img>
          <p>Html and Css</p>
         <img src={Bootstrap_logo}></img>
          <p>Bootstrap</p>
        </div>
      </div>
    );
  }

  export default Main;
  
 