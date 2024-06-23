var sidemenu = document.getElementById("sidemenu");

  function openmenu(){
    sidemenu.style.right = "0";
  }
  function closemenu(){
    sidemenu.style.right = "-200px";
  }

  var fullImgBox = document.getElementById("fullImgBox");
  var fullImg = document.getElementById("fullImg");

  function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
  }

  function closeFullImg(){
    fullImgBox.style.display = "none";
  }

//Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  display: 400,
  //reset true
})

sr.reveal('.footer-container');
sr.reveal('.footer-info', {delay: 500});