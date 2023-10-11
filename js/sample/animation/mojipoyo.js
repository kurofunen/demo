//spanを追加する場合
$(function () {
    var elm = $(".mojipoyospan");
    var content = $(elm).html();
    console.log(content);
    var text = $.trim(content);
    var newHtml = "";
    text.split("").forEach(function (v) {
        newHtml += "<span>" + v + "</span>";

    });
    $(elm).html(newHtml);
});
(window.onload = function () {

    $('.mojipoyoH2_01').addClass('poyoyon');
    $('.mojipoyoH2_01').on('inview', function (event, isInView) {

        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_02').addClass('poyoyon02');
    $('.mojipoyoH2_02').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_03').addClass('poyoyon03');
    $('.mojipoyoH2_03').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_04').addClass('poyoyon04');
    $('.mojipoyoH2_04').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_05').addClass('poyoyon05');
    $('.mojipoyoH2_05').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_06').addClass('poyoyon06');
    $('.mojipoyoH2_06').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_07').addClass('poyoyon07');
    $('.mojipoyoH2_07').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_08').addClass('poyoyon08');
    $('.mojipoyoH2_08').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_09').addClass('poyoyon09');
    $('.mojipoyoH2_09').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_010').addClass('poyoyon10');
    $('.mojipoyoH2_010').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_011').addClass('poyoyon11');
    $('.mojipoyoH2_011').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.mojipoyoH2_012').addClass('poyoyon12');
    $('.mojipoyoH2_012').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    //一覧の出方
    $('.listLinkFig').addClass('opacity_nyoki');
    $('.listLinkFig').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('.listTitle').addClass('opacity_nyokiList');
    $('.listTitle').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
        } else {}
    });

    $('<span class="prefcover"></span>').prependTo('.prefcoverarea');
    $('.prefcoverarea').addClass('opacity_pref');
    $('.prefcoverarea').on('inview', function (event, isInView) {
        if (isInView) {
            $(this).addClass('active');
            $('.prefcover').delay(500).animate({
                'left': '100%'
            }, 'linear');
        } else {}
    });
})();



$('button').on('click', function () {
    window.location.reload();
});