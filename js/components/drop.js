// const dropBtn = document.querySelectorAll('.nav-btn')
// const dropMenu = document.querySelectorAll('.drop-menu')
// const mql = window.matchMedia(mediaQueryString)

// console.log(dropBtn);
// console.log(dropMenu);

// dropBtn.forEach(el => {

//     el.addEventListener('click', (event) => {
//         const menu = event.currentTarget.dataset.path
//         dropMenu.forEach(el => {
//             const rightMenu = document.querySelector(`[data-target=${menu}]`)
//             if (!rightMenu.classList.contains('open')) {

//                 rightMenu.classList.add('show')                
//             } 
//         })
//     })

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




// dropBtn.forEach(el => {
//     el.addEventListener('click', (event) => {
//         const menu = event.currentTarget.dataset.path
//         dropMenu.forEach(el => {
//             const trueMenu = document.querySelector(`[data-target=${menu}]`)
//             if (!trueMenu.classList.contains('open')) {
//                 // event.classList.remove('show')
//                 trueMenu.classList.add('show')
//             }
//         })
//     })
// })
// dropBtn.forEach(el => {
//     el.addEventListener('mouseout', (event) => {
//         const menu = event.currentTarget.dataset.path
//         dropMenu.forEach(el => {
//             const trueMenu = document.querySelector(`[data-target=${menu}]`)
//             if (!trueMenu.classList.contains('open')) {
//                 setTimeout(() => {
//                     trueMenu.classList.remove('show')
//                 }, 2000);
//                 // document.querySelector(`[data-target=${menu}]`).classList.remove('show')
//             }
//         })
//     })
// })
