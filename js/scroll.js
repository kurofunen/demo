$(function () {
    let i;
    $(".inner").each(function (i, elem) {
        let position = $(elem).offset().top;
        $(window).on("load scroll", function () {
            let scrollTop = $(window).scrollTop();
            let winHeight = $(window).height();
            if (scrollTop >= position - winHeight) {
                $(elem).addClass("active"+i);
                $('.innerImage').addClass("active");
            } else {
                $(elem).removeClass("active"+i);
                $('.innerImage').removeClass("active");
            }
        });
    });
});
