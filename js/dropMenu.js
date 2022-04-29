
// if (mainDropMenu.addEventListener('click', (event) =>{
//         event.preventDefault
// }
//
// )) {
//     drop.classList.add('show')
// } else {
//     drop.classList.remove('show')
// }


    // mainDropMenu.addEventListener('mouseover',showList)
    // mainDropMenu.addEventListener('mouseleave',hideList)

    // mainDropMenu.addEventListener('click',showList)
    // mainDropMenu.addEventListener('click',hideList)
    //




    // const trigger = document.querySelector(triggerSelector)
    // const mainDropMenu = document.querySelector(dropSelector)
    // const showList = document.querySelector(showSelector)

    
    // function showList() {
    //     drop.classList.add('show')
    //
    // }
    // function hideList() {
    //     drop.classList.remove('show')
    //
    // }
    
    // trigger.forEach(item => {
    //     if (item.addEventListener('mouseover')){
    //         console.log(item)
    //         mainDropMenu.classList.add('show')
    //     } else if (item.addEventListener('mouseleave')){
    //         mainDropMenu.classList.remove('show')
    //     }


    // })

// }

// export default dropMenu


const parentOfDropdown = document.querySelectorAll('.navbar-nav')
const dropdown = document.querySelectorAll('.dropdown')
const dropdownMenu = document.querySelector('.dropdown-menu')

parentOfDropdown.forEach(dropdown => {
    dropdown.addEventListener('mouseover',() => {
        dropdownMenu.classList.add('show')
    })
    dropdown.addEventListener('mouseleave',() => {
        dropdownMenu.classList.remove('show')
    })
})

// ['mouseover', 'click'].forEach(e => {
//     dropdown.addEventListener(e, function() {
//         // dropdownToggle.classList.add('show')
//         dropdownMenu.classList.add('show')
//     })
//     })




// dropdown.addEventListener('mouseout', function () {
//     dropdownMenu.classList.remove('show')
//     // dropdownToggle.classList.remove('show')
//
// })