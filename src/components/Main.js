import React from 'react';
import React_logo from '../images/react.png';
import Html_css_logo from '../images/html_css.png'
import Bootstrap_logo from '../images/bootstrap.png'
import Test_image from '../images/test_image.jpg' // For testing purposes 

function Main() {
    return (
      <div class='main'>
         <img src={React_logo}></img>
          <p>React</p>
         <img src={Html_css_logo}></img>
          <p>Html and Css</p>
         <img src={Test_image}></img>
          <p>Bootstrap</p>
      </div>
    );
  }

  export default Main;
  
 