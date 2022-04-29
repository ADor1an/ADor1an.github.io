// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".collapsed-menu");
// const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     // link.classList.toggle("fade");
//   });
// });


const btnHam = document.querySelector('.js-hamburger')

const collapsedMenu = document.querySelector('.collapsed-menu')

const menuLinks = document.querySelectorAll('.nav-item')

btnHam.addEventListener('click', () => {

    btnHam.classList.toggle('is-active')

    collapsedMenu.classList.toggle('open')

    menuLinks.forEach(link => {
      link.classList.toggle("fade");
    });


  })