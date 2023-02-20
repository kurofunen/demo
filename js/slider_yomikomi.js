
$(function () {
    $(".slider")
            // 最初のスライドに"add-animation"のclassを付ける(data-slick-index="0"が最初のスライドを指す)
            .on("init", function () {
                $('.slick-slide[data-slick-index="0"]').addClass("add-animation");
            })
            // 通常のオプション
            .slick({
                autoplay: true, // 自動再生ON
                fade: true, // フェードON
                arrows: false, // 矢印OFF
                speed: 2000, // スライド、フェードアニメーションの速度1000ミリ秒
                autoplaySpeed: 4000, // 自動再生速度4000ミリ秒
                pauseOnFocus: false, // フォーカスで一時停止OFF
                pauseOnHover: false, // マウスホバーで一時停止OFF
            })
            .on({
                // スライドが移動する前に発生するイベント
                beforeChange: function (event, slick, currentSlide, nextSlide) {
                    // 表示されているスライドに"add-animation"のclassをつける
                    $(".slick-slide", this).eq(nextSlide).addClass("add-animation");
                    // あとで"add-animation"のclassを消すための"remove-animation"classを付ける
                    $(".slick-slide", this).eq(currentSlide).addClass("remove-animation");
                },
                // スライドが移動した後に発生するイベント
                afterChange: function () {
                    // 表示していないスライドはアニメーションのclassを外す
                    $(".remove-animation", this).removeClass(
                            "remove-animation add-animation"
                            );
                },
            });
});


(window.onload = function() {
    var swiper = new Swiper('.swipper', {
        loop: true, // ループ有効
        speed: 1000, // ループの時間
        allowTouchMove: false, // スワイプ無効,
        spaceBetween: 100,
        slidesPerView: 1,//はみ出す時は'auto'を指定
//        autoplay: {
//        delay: 0, // 途切れなくループ
//        },
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable:true
        },
        // ナビボタンが必要なら追加
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
}, false);