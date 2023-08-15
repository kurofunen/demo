(window.onload = function () {
    //サムネイル付スライダ
    const swiper01 = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 8
    });

    const swiper2 = new Swiper(".mySwiper2", {
        thumbs: {
            swiper: swiper01
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    //見切れるスライダ

    const mySwiper03 = new Swiper('.card02 .swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        grabCursor: true,
        pagination: {
            clickable: true,
        },
        navigation: {
            nextEl: '.card02 .swiper-button-next',
            prevEl: '.card02 .swiper-button-prev',
        },
        breakpoints: {
            1025: {
                spaceBetween: 32,
            }
        },
    });


})();