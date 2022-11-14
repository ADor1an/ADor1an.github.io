// const modal = document.querySelector('.modal')
 const modalBtn = document.querySelector('.btn')


    // closeModal = (what_Modal) => {
    //     modal.hide()
    //   }



const form = document.querySelector('#form')

    form.addEventListener('submit', event => {
        event.preventDefault()


        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const tgUsName = document.getElementById('tgUsName').value
        const phone = document.getElementById('phone').value
        const textarea = document.getElementById('user-message').value

        const my_text = ` Your message is:%0A -  <b>Name:</b> <i>${name}</i> %0A - <b>Email:</b> <i>${email}</i> %0A - <b>Telegram User Name:</b> <i>${tgUsName}</i> %0A - <b>Phone number:</b> <i>${phone}</i> %0A - <b>Customer message :</b> <i>${textarea}</i>`;
        // const my_text = ` Your message is:%0A -  Name: ${name} %0A - Email: ${email} %0A - Telegram User Name: ${tgUsName} %0A - Phone number: ${phone}`;

        const token = '5127097269:AAHrLpvUlp5KWgNhRQYN8i8kXJb3-Kk2lzc'
        const chat_id = -725632275
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`


        let api = new XMLHttpRequest()

        api.open('GET', url, true)
        api.send()

        console.log('Message successfully')

        // modalBtn.addEventListener('click', closeModal)
        // firstModal.classList.remove('show')

        // console.log(text1, text2)

    } )




const secondForm = document.querySelector('#secondForm')

    secondForm.addEventListener('submit', event => {
        event.preventDefault()


        const secondName = document.getElementById('secondName').value
        const secondEmail = document.getElementById('secondEmail').value
        const secondTgUsName = document.getElementById('secondTgUsName').value
        const secondPhone = document.getElementById('secondPhone').value
        const secondTextarea = document.getElementById('second-user-message').value

        const my_text = ` Your message is:%0A -  <b>Name:</b> <i>${secondName}</i> %0A - <b>Email:</b> <i>${secondEmail}</i> %0A - <b>Telegram User Name:</b> <i>${secondTgUsName}</i> %0A - <b>Phone number:</b> <i>${secondPhone}</i> %0A - <b>Customer message :</b> <i>${secondTextarea}</i>`;
        // const my_text = ` Your message is:%0A -  Name: ${name} %0A - Email: ${email} %0A - Telegram User Name: ${tgUsName} %0A - Phone number: ${phone}`;

        const token = '5127097269:AAHrLpvUlp5KWgNhRQYN8i8kXJb3-Kk2lzc'
        const chat_id = -725632275
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`


        let api = new XMLHttpRequest()

        api.open('GET', url, true)
        api.send()

        console.log('Message successfully')

        // secondModal.classList.remove('show')


    } )

//
// document.addEventListener('click', event => {
//     console.log(event.target.dataset)
//     if (event.target.dataset.closeFeedback) {
//         closeModal()
//     }
// } )
//
//     function closeModal() {
//         // modal.classList.remove("show")
//         modal.style.display = 'none'
//     }
