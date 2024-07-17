
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
    },
     speed: 400,
    slidesPerView: 1,
    navigation: {
        nextEl: '#slide-prev1',
        prevEl: '#slide-next1',
    },
});

const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 4000,
    },
     speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      580: {
        slidesPerView: 2,
        spaceBetween: 30
      },
     960: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    // navigation: {
    //     nextEl: '#slide-prev1',
    //     prevEl: '#slide-next1',
    // },

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 2500,
    },
     speed: 400,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      580: {
        slidesPerView: 2,
        spaceBetween: 30
      },
     860: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    },
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    navigation: {
        nextEl: '#slide-prev2',
        prevEl: '#slide-next2',
    },

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});