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

const navLink = document.querySelector('.nav-link')

const dropdowns = document.querySelectorAll('.dropdown-menu')

const menuLinks = document.querySelectorAll('.nav-item')

btnHam.addEventListener('click', () => {

    btnHam.classList.toggle('is-active')

    collapsedMenu.classList.toggle('open')

    menuLinks.forEach(link => {
      link.classList.toggle("fade");
    });



  })

  // navLink.addEventListener('click', () => {

  //   // dropdown.classList.toggle('show')
  //   // navLink.classList.toogle('show')

  //   dropdowns.forEach(item => {

  //     item.classList.remove('show')

  //     item.classList.add('hide')

  //     console.log(item);
  //   })

  // })



  


// navItem.addEventListener('click', () => {
//     navItem.classList.toggle('show')
// })
