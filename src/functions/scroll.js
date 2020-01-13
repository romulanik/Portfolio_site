import React from 'react';

window.onscroll = function() {myF()};

function myF() {
  let nav = document.getElementsByClassName('nav')[0];
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
  {
    nav.classList.add('scr');
  }
  else 
  {
    nav.classList.remove('scr');
  }
}

export default myF;