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


//
// const form = document.querySelector('#form')
//
// console.log(form)
//
// form.addEventListener('submit', event => {
//     event.preventDefault()
//
//     const name = document.getElementById('name').value
//     const email = document.getElementById('email').value
//     const tgUsName = document.getElementById('tgUsName').value
//     const phone = document.getElementById('phone').value
//     const textarea = document.getElementById('user-message').value
//
//     const my_text = ` Your message is:%0A -  <b>Name:</b> <i>${name}</i> %0A - <b>Email:</b> <i>${email}</i> %0A - <b>Telegram User Name:</b> <i>${tgUsName}</i> %0A - <b>Phone number:</b> <i>${phone}</i> %0A - <b>Customer message :</b> <i>${textarea}</i>`;
//     // const my_text = ` Your message is:%0A -  Name: ${name} %0A - Email: ${email} %0A - Telegram User Name: ${tgUsName} %0A - Phone number: ${phone}`;
//
//     const token = '5127097269:AAHrLpvUlp5KWgNhRQYN8i8kXJb3-Kk2lzc'
//     const chat_id = -725632275
//     const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`
//
//
//     let api = new XMLHttpRequest()
//
//     api.open('GET', url, true)
//     api.send()
//
//     console.log('Message successfully')
//     // console.log(text1, text2)
// } )
