const swiper = new Swiper(document.querySelector('.swiper'), {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView: 'auto',
    parallax: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    // rewind: true,
    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    autoplay: {
        delay: 5000,
    },
    mousewheel: {
        invert: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
breakpoints: {
    320: {
        slidesPerView: 1,
        spaceBetween: 20,
        direction:'vertical',
        allowTouchMove: true,
    },
    480: {
        slidesPerView: 1,
        spaceBetween: 30,
        direction:'vertical',
        allowTouchMove: true,
    },
    640: {
        slidesPerView: 1,
        spaceBetween: 40,
        allowTouchMove: true,
        // direction:'vertical'

    }
    },


});

