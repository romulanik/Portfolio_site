window.onscroll = function() {myFunction()};

function myFunction() {
    let nav = document.getElementsByClassName("nav")[0];
    
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
  {
    nav.style.background = "lightgreen";
  } 
  else 
  {
    // adding soon crashing problem? //
  }
}


export default myFunction();