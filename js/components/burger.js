// const burger = (triggerSelector) => {


// }

// export default burger



const btnHam = document.querySelector('.js-hamburger')

btnHam.addEventListener('click', () => {

    btnHam.classList.toggle('is-active')

// if (btnHam.classList.contains('is-active')){
//     btnHam.classList.remove('is-active')
// } else {
//     btnHam.classList.add('is-active')
// }

})


// for fullscreen menu

// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });


// for fullscreen menu


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {



  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


