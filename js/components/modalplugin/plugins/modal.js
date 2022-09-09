

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


    // const vWindow = document.querySelector('.vmodal-window')

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

const modalWindow = document.querySelector('.vmodal-window')

// function wipeScroll () {
//     modalWindow.addEventListener('scroll', () => {
//         let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
//
//         if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
//
//             document.querySelector(selector).click()
//
//
//         }
//     })
// }







$.modal = function(options) {

    const $modal = _createModal(options)
    const btnClose = document.querySelector('.close-vmodal')
    const ANIMATION_SPEED = 350
    const notCollapsed = document.querySelector('.not-collapsed')
    const navBrand = document.querySelector('.navbar-brand')
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
            navBrand.style.visibility = 'hidden'
            notCollapsed.style.visibility = 'hidden'
            // notCollapsed.style.cssText = `
            // z-index: -1;
            // `

            // console.log(modalWindow.scrollTop(1))

        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            btnClose.style.visibility = 'hidden'
            notCollapsed.style.visibility = 'visible'

            navBrand.style.visibility = 'visible'
            // notCollapsed.style.zIndex = '10'


            // console.log(vWindow.scrollTop(0, 1));
            // console.log(modalWindow.scrollTop(0))

            // vWindow.scrollTo({
            //     top: 10,
            //     left: 0,
            //     behavior: 'smooth'
            // });
            
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
            console.log(event.target)
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