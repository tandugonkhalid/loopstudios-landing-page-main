var navbar = document.querySelector(".navbar");
var ham = document.querySelector(".ham");
var menuLinks = document.querySelectorAll(".menuLink")

ham.addEventListener("click", toggleHamburger);

function toggleHamburger(){
  navbar.classList.toggle("showNav");
  ham.classList.toggle("showClose");
}

menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)
