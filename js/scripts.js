console.log("Welcome to my portfolio!");

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}

// code to make the site scroll to a specific place right away
//window.scroll({
  //top: 200,
//  left: 0,
//  behavior: 'smooth'});
