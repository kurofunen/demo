//nyokislider
window.addEventListener('load', function() {
    let mySwiper = new Swiper ('.swiper01', {
    loop: true,
    effect: 'fade',
    speed: 1, 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 5000,
      },
      breakpoints: {
          640: {
        }
      } 
  })
});





window.addEventListener('DOMContentLoaded', function() {
     $('.listLinkFig').addClass('opacity_nyoki');
     $('.listLinkFig').on('inview', function(event, isInView) {if (isInView) {$(this).addClass('active');} else {}});
     
     $('.listTitle').addClass('opacity_nyokiList');
     $('.listTitle').on('inview', function(event, isInView) {if (isInView) {$(this).addClass('active');} else {}});
     
    $('<span class="prefcover"></span>').prependTo('.prefcoverarea');
    $('.prefcoverarea').addClass('opacity_pref');
    $('.prefcoverarea').on('inview', function(event, isInView) {
    if (isInView) {
        $(this).addClass('active');
        $('.prefcover').delay(500).animate( {'left': '100%'}, 'linear'); 
    } else {}}); 
    
});

window.addEventListener('DOMContentLoaded', function () {
// サムネイル
const sliderThumbnail = new Swiper(".slider-thumbnail", {
  slidesPerView: 3, // サムネイルの枚数
});
// スライダー
const slider = new Swiper(".slider", {
  loop: true,
  effect: "fade", // フェード
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
});
}, false);