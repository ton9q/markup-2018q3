/* NAVIGATION HEADER*/
menuTop.addEventListener('click', () => {
  const x = document.getElementById('myTopnav')

  if(x.className === 'top-nav') {
    x.className += " responsive";
  } else {
    x.className = 'top-nav'
  }
});