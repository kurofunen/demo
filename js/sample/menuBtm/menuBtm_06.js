$(function () {
    /* ==========================================================================
        FAQトグルボタン
        ========================================================================== */
    $(".jsBtnListIndexFaqFx").on("click", function () {
        if ($(this).hasClass('off')) {
            $(this).next('.jsCntListIndexFaqFx').fadeIn(500);
            $(this).removeClass('off').addClass('on');
        } else {
            $(this).next('.jsCntListIndexFaqFx').fadeOut();
            $(this).removeClass('on').addClass('off');
        }
    });
    /* ==========================================================================
        ロゴの動き
        ========================================================================== */
    $(".logoHeaderPc").addClass("active");
    $(window).scroll(function () {
        if ($(this).scrollTop() <= 200) {
            $(".logoHeaderPc").removeClass("scrollTo");
            $(".base_header").removeClass("scrollTo");
        } else {
            $(".logoHeaderPc").addClass("scrollTo");
            $(".base_header").addClass("scrollTo");
        }
    });
    /* ==========================================================================
    追従ボタン
    ========================================================================== */
    $(window).scroll(function () {
        if ($(this).scrollTop() <= 400 && window.innerWidth > 750) {
            $(".tuijyuuArea").fadeOut(500);
        } else {
            $(".tuijyuuArea").fadeIn(500);
        }
    });
    /* ==========================================================================
    スムーススクロール
    ========================================================================== */
    var headerHeight = $('.base_header').outerHeight();
    var urlHash = location.hash;
    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function () {
            var target = $(urlHash);
            var position = target.offset().top - headerHeight;
            $('body,html').stop().animate({
                scrollTop: position
            }, 500);
        }, 100);
    }
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({
            scrollTop: position
        }, 500);
    });
});



/* ==========================================================================
メガメニュー
========================================================================== */
jQuery(document).ready(function ($) {
    $('.liNavHeaderPc').hover(
        function () {
            console.log('---');
            $(this).find('.subNavHeaderPc').fadeIn(500);
        },
        function () {
            $(this).find('.subNavHeaderPc').fadeOut(500);
        }
    );
});