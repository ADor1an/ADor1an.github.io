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

// try to fix .show drop-toggle on mobile
//   const dropItem = document.querySelector('.dropdown-toggle').classList.contains('show')
//   const dropMenu = document.querySelector('.dropdown-menu').classList.contains('show')
//
// console.log(dropItem);
// console.log(dropMenu);
//
// function removeClassShow(){
//
//
//
// }
//
//   dropItem.addEventListener('click', () => {
//     if (dropItem.classList.contains('show') && dropMenu.classList.contains('show')) {
//
//       dropItem.classList.remove('show')
//       dropMenu.classList.remove('show')
//
//     } else {
//
//       dropItem.classList.add('show')
//         dropMenu.classList.add('show')
//
//     }
//
//   })
//
//
//     dropItem.addEventListener('click', () => {
//
//
//     })


// try to fix .show drop-toggle on mobile



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



let intervalID

document.querySelectorAll('.dropdown-toggler').forEach(el => {
    el.addEventListener('click', (event) => {
        const menu = event.currentTarget.dataset.path
        document.querySelectorAll('.drop-menu').forEach(el => {

            const trueMenu = document.querySelector(`[data-target=${menu}]`)


            if (!trueMenu.classList.contains('open')) {

                el.classList.remove('show-drop-menu')
                el.classList.remove('open')
                trueMenu.classList.add('show-drop-menu')
                intervalID = setTimeout(() =>{
                    trueMenu.classList.add('open')
                }, 0)
            }

            if (trueMenu.classList.contains('open')) {
                trueMenu.classList.remove('show-drop-menu')
                intervalID = setTimeout(() => {
                    trueMenu.classList.remove('open')
                })
            }
        })
    })
})