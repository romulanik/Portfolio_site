import React from 'react';
import Fb from '../images/fb.png';
import Git from '../images/git.png';

function Contact() {
    return (
      <div class='contact'>
      <a href="https://github.com/romulanik?tab=repositories"><img src={Git}/> </a>
      <a href="https://www.facebook.com/piotr.kwiatkowski.96780671"><img src={Fb}/></a>
      <a class="btn btn-outline-dark btn-lg" href="#" role="button"> Contact me! </a>
     
      </div>
    );
  }

  export default Contact;
  
