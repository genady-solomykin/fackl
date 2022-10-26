var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1]
  },
  callbacks: {
    elementParse: function(item) {
      if(item.el[0].className == 'video') {
        item.type = 'iframe',
        item.iframe = {
           patterns: {
             youtube: {
               index: 'youtube.com/', 

               id: 'v=', 

               src: '//www.youtube.com/embed/%id%?autoplay=1'
             },
           }
        }
      } else {
         item.type = 'image',
         item.image = {
           tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
         }
      }

    }
  }
});