function scrollHeader(){
  const header = document.getElementById('header');
  if(this.scrollY >= 50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

var swiperPopular = new Swiper(".popular-container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const accordionItems = document.querySelectorAll('.value-accordion-item');

accordionItems.forEach((item) =>{
  const accordionHeader = item.querySelector('.value-accordion-header');

  accordionHeader.addEventListener('click', () =>{
    const openItem = document.querySelector('.accordion-open');

    toggleItem(item);

    if(openItem && openItem!== item){
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) =>{
  const accordionContent = item.querySelector('.value-accordion-content');

  if(item.classList.contains('accordion-open')){
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  }else{
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  } 
};

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  //when the scroll up is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-thumb
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
}
window.addEventListener('scroll', scrollUp)

//Dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'fa-regular fa-moon' : 'fa-regular fa-sun'

//we validate if the user previously chose a topic
if(selectedTheme) {
  //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-regular fa moon' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  //Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //we save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

//Scroll Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  display: 400,
  //reset true
})

sr.reveal('.home-title, .popular-container, .subscribe-container, .footer-container')
sr.reveal('.home-description, .footer-info', {delay: 500})
sr.reveal('.home-search', {delay: 600})
sr.reveal('.home-value', {delay: 700})
sr.reveal('.home-images', {delay: 800, origin: 'bottom'})
sr.reveal('.logos-img', {interval: 100})
sr.reveal('.value-images, .contact-content', {origin: 'left'})
sr.reveal('.value-content, .contact-images', {origin: 'right'})