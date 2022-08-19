const link = document.querySelector('.nav-link '),
    dropMenu = document.querySelector('.dropdown-menu ')

document.addEventListener('click', event => {
    // event.stopPropagation()
    console.log(event.target)
    if (event.target === link && dropMenu.contains('.show')) {
        dropMenu.classList.remove('.show')
    }
})