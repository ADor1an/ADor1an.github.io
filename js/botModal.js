const botButton = document.querySelector('.botButton')
const feedbackModal = document.querySelector('#modal-feedback')


botButton.addEventListener('click', () => {
    botButton.classList.add('active')


    if  (feedbackModal.classList.contains('show')) {
        botButton.classList.add('focused')
    } else {
        feedbackModal.classList.remove('show')
        delActive() 
        addFocus()
        delFocus()    
    }

    // botButton.classList.add('active')

    // if (feedbackModal.classList.remove('show')) {

    // botButton.classList.add('active')
    // botButton.classList.add('focused')

    // setTimeout(() => {
    //     delActive()
    //     // botButton.classList.remove('focused')
    //     delFocus()
    // }, 4000)

    // } else {

    //     botButton.classList.add('active')
    //     botButton.classList.add('focused')

    // }
    // // botButton.classList.add('active')

    // setTimeout(() => {
    //     botButton.classList.remove('active')
    //     botButton.classList.add('focused')
    //     delFocus()
    // }, 4000)
})

if (feedbackModal.classList.remove('show') ) {

    
}


function delActive() {
    setTimeout(() => { 
        
        botButton.classList.remove('active')
}, 2500 )
}

function delFocus() {
    setTimeout(() => { 
        botButton.classList.remove('focused')

}, 5000)

}
function addFocus() {
    setTimeout(() => { 
        
        botButton.classList.add('focused')

},200)

}
function addActive() {
    setTimeout(() => { 
        
        botButton.classList.add('active')

},100)

}