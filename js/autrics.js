// alert("js")
 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });

    $('.navbar-toggler').on('click',function(){
    $('.navbar')
    .css({backgroundColor:'#000000',})
})

// 
 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
     
       navigation: {
        nextEl: ".left",
        prevEl: ".right",
      },
      
       breakpoints: {
    // when window width is >= 320px
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50
    },
  },
  

  });
      
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
       breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
       slidesPerView: 4,
      spaceBetween: 40
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50
    },
  },
  

   navigation: {
        nextEl: ".left",
        prevEl: ".right",
      },
  });