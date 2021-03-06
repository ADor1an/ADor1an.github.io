
// const subjects = [
//     {id: 1, title: 'ТОВ «АМБАР+»', toString:function (){ return this.title},
//         price: 20,
//         img: 'https://zeo.ua/storage/app/media/objects/amb1.jpg'},
//     {id: 2, title: 'ТОВ «НОВОТЕХ-ТЕРМІНАЛ»', toString:function (){ return this.title},
//         price: 30,
//         img: 'https://zeo.ua/storage/app/media/objects/Building/prev.jpg'},
//     {id: 3, title: 'ТОВ «МВ КАРГО» (CARGILL)', toString:function (){ return this.title},
//         price: 40,
//         img: 'https://zeo.ua/storage/app/media/objects/Building/cargo-prev.jpg'},
//     {id: 4, title: 'ТОВ «БУЧАЧАГРОХЛІБПРОМ»', toString:function (){ return this.title},
//         price: 45,
//         img: 'https://zeo.ua/storage/app/media/services/stroitelstvo/buchach-new.jpg'},
//     {id: 5, title: 'ТОВ «ОЛСІДЗ БЛЕК СІ»', toString:function (){ return this.title},
//         price: 45,
//         img: 'https://zeo.ua/storage/app/media/services/stroitelstvo/olsidz-new.jpg'},
//     {id: 6, title: 'ТОВ «COFCO-AGRI»', toString:function (){ return this.title},
//         price: 45,
//         img: 'https://zeo.ua/storage/app/media/services/stroitelstvo/cofco-new.jpg'}
// ]



Element.prototype.appendAfter = function(element) {
    element.parentNode.insertBefore(this, element.nextSibling);
}

function noop () {}


function _createModal(options) {
    const DEFAULT_WIDTH = '600px'
    
    const modalParent = document.querySelector('#vmodal')

    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    
    
    console.log(modal);
    modal.insertAdjacentHTML('afterbegin', `
    <div class="vmodal-overlay" data-close="true">
    <div class="vmodal-window" style="width: ${options.width || DEFAULT_WIDTH}" >
        <div class="vmodal-header">                
            <div class="vmodal-title" data-title>
                <h1 class="vmodal-caption">${options.title || 'Title'}</h1>
            </div>
            <div data-image>
            <picture>
            ${options.image || ''}
                
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" height="600px" width="100%" alt="">
            </picture>
            </div>
            
        </div>
        <div class="vmodal-body" data-content>
            <h1>DEVELOPER ON JOB</h1>
            ${options.content || ''}
        </div>
    </div>
</div>

    ${options.closable ? `
    <button class="close-vmodal" data-close="true">
    <svg data-close="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
</button>` : ''}
    `)


    const gallery = _createCarousel(options.galleries) 

    gallery.appendAfter(modal.querySelector('[data-content]'))

    // modalParent.appendChild(modal)
    document.body.appendChild(modal)
    return modal
}  

function _createCarousel(options) {

    const wrap = document.createElement('div')
    wrap.classList.add('carousel-wrap') 

    wrap.insertAdjacentHTML('afterbegin',
    `
        <div class="gallery">
        <div data-gallery> 
        ${options.gallery || ''}
        </div>
        </div>
    `
    )

    return wrap
}





$.modal = function(options) {

    const $modal = _createModal(options)
    
    const btnClose = document.querySelector('.close-vmodal')
    // const voverlay = document.querySelector('.vmodal-overlay')
    const ANIMATION_SPEED = 350
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal was destroy');
            }

            !closing && $modal.classList.add('open')
            btnClose.style.visibility = 'visible'
            btnClose.classList.add('active')

        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            btnClose.style.visibility = 'hidden'
            // document.body.style.cssText = `
            // overflow-y:hidden;
            // `

            closing = true
            setTimeout(() => {
                $modal.classList.remove('hide')
                closing = false
            }, ANIMATION_SPEED)
            
        },
    }



    const listener = event => {

        if (event.target.parentNode.dataset.close || event.target.dataset.close) {
                modal.close()
            }

        if (event.target.parentNode.dataset.open || event.target.dataset.open) {
            modal.open()
        }

    }

    $modal.addEventListener('click', listener)






    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        },
        setTitle(html) {
            $modal.querySelector('[data-title]').innerHTML = html
        }, 
        setImage(html) {
            $modal.querySelector('[data-image]').innerHTML = html
        },
        setGallery(html) {
            $modal.querySelector('[data-gallery]').innerHTML = html
        }
    })

}