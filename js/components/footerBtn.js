const footerBtn = document.querySelector('.footer-btn')
const footerNav = document.querySelector('.footer-nav')

// const btnIcon = document.querySelector('.btn-icon-foot')

// const oldIcon = btnIcon.querySelector('.bi-arrow-up-short')

// const newIcon = `
// <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
// <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
// </svg>
// `

// console.log(oldIcon);

// console.log(btnIcon);




footerBtn.addEventListener('click', () => {

if (footerBtn.classList.contains('footer-btn_active')) {
    footerBtn.classList.remove('footer-btn_active');
    footerNav.classList.remove('footer-nav_active');
    
} else {
    footerBtn.classList.add('footer-btn_active');
    footerNav.classList.add('footer-nav_active');
}


})

// function changeIcon () {

//     btnIcon = parentNode.replaceChild(oldIcon, newIcon);

// }

