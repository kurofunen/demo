$(function () {
    /* ==========================================================================
       SPメニューの開け閉め
       ========================================================================== */
    $('.jsBtmHeaderSp').on('click', function () {
        $(".jsNavHeaderSp").slideToggle();
    });

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


});