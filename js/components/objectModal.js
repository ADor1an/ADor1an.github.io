const listener = event => {

    // event.stopPropagation

    if (event.target.parentNode.parentNode.parentNode.dataset.open || event.target.parentNode.parentNode.dataset.open || event.target.parentNode.dataset.open) {
        modal.open()
    } 

    if(event.target.parentNode.parentNode.dataset.close || event.target.parentNode.dataset.close || event.target.dataset.close) {
        modal.close()
    }   console.log('clicked', event.target.parentNode.parentNode || event.target.parentNode || event.target);

}

const $modal = document.querySelector('.vmodal')
const btnClose = document.querySelector('.close-vmodal')
const voverlay = document.querySelector('.vmodal-overlay')
const ANIMATION_SPEED = 350

// const listenerTab  = document.querySelector('.tab-content')

let closing = false

const modal = {
    open() {        
        !closing && $modal.classList.add('open')
        btnClose.style.visibility = 'visible'
        btnClose.classList.add('active')
    },
    close() {
        $modal.classList.remove('open')
        $modal.classList.add('hide')
        btnClose.style.visibility = 'hidden'
        // btnOpen.style.visibility = 'visible'
        closing = true
        setTimeout(() => {
            $modal.classList.remove('hide')
            closing = false
        }, ANIMATION_SPEED)
        
    },
}


$modal.addEventListener('click', listener)
