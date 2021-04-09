const navigationMobileButton = document.querySelector('.navigation__menuButton');
const navigationMobile = document.querySelector(".navigationMobile");
const navigation = document.querySelector(".navigation")
const navigationMobileLinks = document.querySelectorAll(".navigationMobile__link");
let activeMobileMenu = false;

navigationMobileButton.addEventListener('click', () => {
  if(!activeMobileMenu) {
    navigationMobileButton.classList.add('activeMobileNavigation');
    activeMobileMenu = true;
    navigationMobile.style.left = "0vw"
  } else {
    navigationMobileButton.classList.remove('activeMobileNavigation');
    activeMobileMenu = false;
    navigationMobile.style.left = "-80vw"
  }
}); 

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 150) {
        navigation.classList.add("navigation__scroll")
    } else if(window.pageYOffset < 150) {
        navigation.classList.remove("navigation__scroll")
    }
})

navigationMobileLinks.forEach(element => {
    element.addEventListener("click", () => {
        navigationMobile.style.left = "-80vw"
        navigationMobileButton.classList.remove('activeMobileNavigation');
    })
});

