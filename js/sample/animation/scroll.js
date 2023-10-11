let bgIndexPrice;
let skaterFig;
$(window).scroll(function () {

    if ($(".bgIndexPrice").length) {
        bgIndexPrice = $(this).scrollTop() - $('.bgIndexPrice').offset().top + 0;
        $('.bgIndexPriceSp').css({
            "-webkit-transform": "translate3d(0px," + parseInt(bgIndexPrice / 5) + "px,0px)",
            "-ms-transform": "translate3d(0px," + parseInt(bgIndexPrice / 5) + "px,0px)",
            "transform": "translate3d(0px," + parseInt(bgIndexPrice / 5) + "px,0px)"
        });
        $('.bgIndexPriceSp').css('top', -parseInt(-bgIndexPrice / 5) + 'px');

        skaterFig = $(this).scrollTop() - $('.bgIndexPrice').offset().top + 0;
        $('.skaterFig').css({
            "-webkit-transform": "translate3d(0px," + parseInt(skaterFig / 15) + "px,0px)",
            "-ms-transform": "translate3d(0px," + parseInt(skaterFig / 15) + "px,0px)",
            "transform": "translate3d(0px," + parseInt(skaterFig / 15) + "px,0px)"
        });
        $('.skaterFig').css('top', -parseInt(-skaterFig / 15) + 'px');
    }
});


let officeAreaFig;
$(window).scroll(function () {
    if ($(".officeAreaFig").length) {
        officeAreaFig = $(this).scrollTop() - $('.officeArea').offset().top + 0;
        $('.officeAreaFig').css({
            "-webkit-transform": "translate3d(0px," + parseInt(officeAreaFig / 30) + "px,0px)",
            "-ms-transform": "translate3d(0px," + parseInt(officeAreaFig / 30) + "px,0px)",
            "transform": "translate3d(0px," + parseInt(officeAreaFig / 30) + "px,0px)"
        });
        $('.officeAreaFig').css('top', -parseInt(-officeAreaFig / 30) + 'px');
    }
});

let reasonItem01;
$(window).scroll(function () {
    reasonItem01 = $(this).scrollTop() - $('.reason').offset().top + 0;
    $('.reasonItem01').css({
        "-webkit-transform": "translate3d(0px," + parseInt(reasonItem01 / 30) + "px,0px)",
        "-ms-transform": "translate3d(0px," + parseInt(reasonItem01 / 30) + "px,0px)",
        "transform": "translate3d(0px," + parseInt(reasonItem01 / 30) + "px,0px)"
    });
    $('.reasonItem01').css('top', -parseInt(-reasonItem01 / 30) + 'px');
});