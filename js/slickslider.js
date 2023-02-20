$('.jsSliderGaufrierProductTop').slick({
    arrows: false,
    asNavFor: '.jsSliderGaufrierProductBtm',
    cssEase: 'linear'
});
$('.jsSliderGaufrierProductBtm').slick({
    arrows: true,
    asNavFor: '.jsSliderGaufrierProductTop',
    focusOnSelect: false,
    slidesToShow: 4,
    focusOnSelect: true, // サムネイルクリックを有効化
    slidesToScroll: 1,
    variableWidth: true, 
//    centerMode:true,
//    centerPadding: '0%',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                arrows: true,
                slidesToScroll: 1
            }
        }
    ],
    prevArrow:'<button type="button" class="slick-prev"><img src="img/btmPrevSlider.svg"></button>',
    nextArrow:'<button type="button" class="slick-next"><img src="img/btmNextSlider.svg"></button>',
});

////$('.jsSliderGaufrierProductTop').slick({
//    arrows: false,
//    asNavFor: '.jsSliderGaufrierProductBtm',
//});
//$('.jsSliderGaufrierProductBtm').slick({
//    asNavFor: '.jsSliderGaufrierProductTop',
//    focusOnSelect: true,
//    slidesToShow: 4,
//    focusOnSelect: true, // サムネイルクリックを有効化
//    arrows: true,
//    slidesToScroll: 1,
//    responsive: [
//        {
//            breakpoint: 768,
//            settings: {
//                slidesToShow: 4,
//                arrows: true,
//                slidesToScroll: 1
//            }
//        }
//    ],
//    prevArrow:'<button type="button" class="slick-prev"><img src="img/btmPrevSlider.svg"></button>',
//    nextArrow:'<button type="button" class="slick-next"><img src="img/btmNextSlider.svg"></button>',
//});
