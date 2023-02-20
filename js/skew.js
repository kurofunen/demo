//背景固定
let trpo01; 

$(window).scroll(function () {
     trpo01 = $(this).scrollTop() - $('.bgImage').offset().top + 20;
    $('.fixedImage').css({
        "-webkit-transform": "translate3d(0px," + parseInt(trpo01 / 10) + "px,0px)",
        "-ms-transform": "translate3d(0px," + parseInt(trpo01 / 10) + "px,0px)",
        "transform": "translate3d(0px," + parseInt(trpo01 / 10) + "px,0px)"
    });
    if (window.innerWidth < 750) {
        $('.fixedImage').css({
            "-webkit-transform": "translate3d(0px," + parseInt(trpo01 / 15) + "px,0px)",
            "-ms-transform": "translate3d(0px," + parseInt(trpo01 / 15) + "px,0px)",
            "transform": "translate3d(0px," + parseInt(trpo01 / 15) + "px,0px)"
        });
    }
});



//最後の要素
(window.onload = function() {
    $('.h1End').addClass('powan');
    $('.h1End').on('inview', function(event, isInView) {if (isInView) {$(this).addClass('active');} else {}});
    $('.endFig').addClass('nyanpoyo');
    $('.endFig').on('inview', function(event, isInView) {if (isInView) {$(this).addClass('active');} else {}});
})();