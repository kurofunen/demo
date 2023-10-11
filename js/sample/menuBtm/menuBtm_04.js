$(function () {
    console.log("-")
    /* ==========================================================================
    スムーズスクロール
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

    /* ==========================================================================
    SPメニューの開け閉め
    ========================================================================== */
    $(".jsBtmHeaderSp").on("click", function () {
        if ($(this).hasClass('off')) {
            $('.jsNavHeaderSp').removeClass('off').addClass('on');
            $('.bgNvHeaderSp').fadeIn(500);
            $(this).removeClass('off').addClass('on');
        } else {
            $('.jsNavHeaderSp').removeClass('on').addClass('off');
            $('.bgNvHeaderSp').fadeOut();
            $(this).removeClass('on').addClass('off');
        }
    });

    $('.bgNvHeaderSp').on("click", function () {
        if ($(this).hasClass('off')) {
            $('.jsBtmHeaderSp').removeClass('off').addClass('on');
            $('.jsNavHeaderSp').removeClass('off').addClass('on');
            $(this).fadeIn();
        } else {
            $('.jsBtmHeaderSp').removeClass('on').addClass('off');
            $('.jsNavHeaderSp').removeClass('on').addClass('off');
            $(this).fadeOut();
        }
    });
    /* ==========================================================================
    SPメニューのリンクをクリックした時のメニューの開け閉め
    ========================================================================== */
    $(".btmNavHeaderSp").on("click", function () {
        $('.jsNavHeaderSp').slideToggle();
        if ($(".jsBtmHeaderSp").hasClass('off')) {
            $(".jsBtmHeaderSp").removeClass('off').addClass('on');
        } else {
            $(".jsBtmHeaderSp").removeClass('on').addClass('off');
        }
    });

});
/* ==========================================================================
スクロールしてヘッダを過ぎたら変更する
========================================================================== */
$(window).scroll(function () {
    let scrollPosition = $(this).scrollTop();
    let headerOffset = $(".base_header").outerHeight();
    let navOffset = window.offsetTop - headerOffset;
    if (scrollPosition >= headerOffset) {
        $(".base_header").addClass('on');
        $(".h1Title").addClass('on');
        $(".headerSpFx").addClass('on');
        $(".brdHeaderSp ").css("background", "#333");
        $('.navHeaderSp').css("top", navOffset);
    } else {
        $(".base_header").removeClass('on');
        $(".h1Title").removeClass('on');
        $(".headerSpFx").removeClass('on');
        $(".brdHeaderSp ").css("background", "#ccc");
        $('.navHeaderSp').css("top", navOffset);
    }

});