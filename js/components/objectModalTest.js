console.log('hello');


Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

function noop () {}

function _createFooter(buttons = []) {
    if (buttons.length === 0) {
        return document.createElement('div')
    }

    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')

    wrap.innerHTML = `
    <div class="gallery">
    <picture></picture>
    <picture></picture>
    <picture></picture>
    <picture></picture>
    <picture></picture>
    <picture></picture>
    </div>
    `
    
    

    // buttons.forEach( btn => {
    //     const $btn = document.createElement('button')
    //     $btn.textContent = btn.text
    //     $btn.classList.add('btn')
    //     $btn.classList.add(`btn-${btn.type || 'secondary'}`)
    //     $btn.onclick = btn.handler || noop

    //     wrap.appendChild($btn)
    // })

    return wrap
}



function _createModal (options) {
    const modal = document.createElement('div');

    modal.classList.add('vmodal')
    modal.insertAdjacentElement('afterbegin', `
    <div class="vmodal-overlay" data-close="true">
    <div class="vmodal-window" style="width: ${options.width || DEFAULT_WIDTH}">
        <div class="vmodal-header">                
            <div class="vmodal-title" data-title>
                <h1 class="vmodal-caption">${options.title || 'Title'}</h1>
            </div>
            <picture>
            ${options.image || ''}
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" height="600px" width="100%" alt="">
            </picture>
        </div>
        <div class="vmodal-body" data-content>
        
            ${options.content || ''}
        </div>
    </div>
</div>
<!--            <button class="open-vmodal" data-open="true">-->
<!--                <svg  data-open="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-open" viewBox="0 0 16 16">-->
<!--                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>-->
<!--                    <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>-->
<!--                </svg>-->
<!--            </button> -->
    ${options.closable ? `
    <button class="close-vmodal" data-close="true">
    <svg data-close="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
</button>` : ''}
    `)

    const footer = _createFooter(options.footerButtons) 

    footer.appendAfter(modal.querySelector('[data-content]'))
    
    document.body.appendChild(modal)
    return modal
}

const $modal = document.querySelector('.vmodal')


const modal = {
    open() {
        if (destroyed) {
            return console.log('Modal is destroy')

        }
        
        !closing && $modal.classList.add('open')
        btnClose.style.visibility = 'visible'
        // btn.classList.toggle('active')
        btnClose.classList.add('active')
        document.body.style.overflow = 'hidden'
        // btnOpen.style.visibility = 'hidden'
    },
    close() {
        $modal.classList.remove('open')
        $modal.classList.add('hide')
        btnClose.style.visibility = 'hidden'
        document.body.style.overflow = 'scroll'

        // btnOpen.style.visibility = 'visible'
        closing = true
        setTimeout(() => {
            $modal.classList.remove('hide')
            closing = false
        }, ANIMATION_SPEED)
        
    },
}




const listener = event => {

    if (event.target.parentNode.dataset.close || event.target.dataset.close) {
        // if (event.target.dataset.close) {
            modal.close()
            // || btnClose.close() 
            // overlayClose()
        }
        // console.log('clicked', event.target.dataset.close)
        // console.log('clicked', event.target)
        if (event.target.parentNode.dataset.open || event.target.dataset.open) {
            modal.open()
            // btnClose.classList.toggle('active')
        }
}
