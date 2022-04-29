const slides = document.querySelectorAll('.galleryItem')
// const active = document.querySelector(".active")


for (const galleryItem of slides) {
    galleryItem.addEventListener('click', () => {
        clearActiveClasses()
        galleryItem.classList.add('active')
    })

}

function clearActiveClasses() {
    slides.forEach( (galleryItem) => {
        galleryItem.classList.remove('active')
    })
}