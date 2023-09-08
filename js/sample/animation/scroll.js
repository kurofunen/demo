let bgIndexPrice;
$(window).scroll(function () {
    if ($(".bgIndexPrice").length) {
        bgIndexPrice = $(this).scrollTop() - $('.bgIndexPrice').offset().top + 0;
        $('.bgIndexPriceSp').css({
            "-webkit-transform": "translate3d(0px," + parseInt(bgIndexPrice / 5) + "px,0px)",
            "-ms-transform": "translate3d(0px," + parseInt(bgIndexPrice / 5) + "px,0px)",
            "transform": "translate3d(0px," + parseInt(bgIndexPrice / 5) + "px,0px)"
        });
        $('.bgIndexPriceSp').css('top', -parseInt(-bgIndexPrice / 5) + 'px');
    }
});