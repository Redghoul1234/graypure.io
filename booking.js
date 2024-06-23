var sidemenu = document.getElementById("sidemenu");

  function openmenu(){
    sidemenu.style.right = "0";
  }
  function closemenu(){
    sidemenu.style.right = "-200px";
  }

  //Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  display: 400,
  //reset true
})

sr.reveal('.subscribe-container, .footer-container')
sr.reveal(' .footer-info', {delay: 500})
