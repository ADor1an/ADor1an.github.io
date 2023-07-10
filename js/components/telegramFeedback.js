document.addEventListener('DOMContentLoaded', function() {


    const createModalButton = document.querySelector('.btn-feedback')
    const modalFeedback = document.querySelector('#modal-feedback')
    
    
    function createModal() {
        const modalContent = `
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form id="secondForm" >
                            <div class="input-group mb-3">
                                <input type="name" name="user_name" id="secondName" class="form-control" placeholder="Ім'я" aria-label="Name">
                            </div>
                            <div class="input-group mb-3">
                                <input type="email" name="user_email" id="secondEmail" class="form-control" placeholder="email@.com:" aria-label="email@.com:" aria-describedby="basic-addon2">
                                <span class="input-group-text" id="basic-addon2">email@.com:</span>
                            </div>
                            <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">
                                        <i class="bi bi-telephone-forward"></i>
                                    </span>
                                <input type="tel" name="user_phone" id="secondPhone" class="form-control" placeholder="Номер телефону" aria-label="telephone" aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="telegramUserName" id="secondTgUsName" name="user-tg" class="form-control" placeholder="Ім'я користувача" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                            <div class="input-group">
                                <span class="input-group-text">Ваше  повідомлення: </span>
                                <textarea name="user-message" id="second-user-message" class="form-control"  aria-label="With textarea"></textarea>
                            </div>
                            <div class="submit-wrapper">
                                <button type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>`
        modalFeedback.insertAdjacentHTML('afterbegin', modalContent) 
        modalFeedback.appendChild(modalContent)


    }

        modal = function() {
            const $modal = createModal()
            const closeButton = document.querySelector('.btn-close')
            closing = false
            const modal = {
                open() {
                    !closing && $modal.parentNode.classList.add('show')
                    $modal.parentNode.style.display = 'block'

                },
                close() {
                    $modal.parentNode.classList.remove('show')
                    $modal.parentNode.classList.add('hide')
                    $modal.parentNode.style.display = 'none'
                    closing = true
                    setTimeout(() => {
                        $modal.parentNode.classList.remove('hide')
                        closing = false
                    }, 500)

                },
            }

            const listener = (event) => {
                if (event.target == closeButton) {
                    modal.close()
                }
                if (event.target == createModalButton) {
                    modal.open()
                }
            }
            $modal.addEventListener('click', listener)
        
        }


    })