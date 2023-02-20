<head>
    <script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
    <!-- slickのJavaScript -->
    <script src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <!-- slickのCSS -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.min.css">
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css">
    <!-------------- Swiper CSS ------------------------------------------------------------->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
    <!-------------- Swiper JS -------------------------------------------------------------->
    <script src="//cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>

    <script type='text/javascript' src="js/slider_yomikomi.js?ver=<?php echo date('Y-m-d-H-i-s'); ?>"></script>
    <link rel="stylesheet" href="css/common.css?ver=<?php echo date('Y-m-d-H-i-s'); ?>"></script>
</head>
<body>
    <div class="wapper">
        <!--slick-->
        <section class="slickarea" id="slickarea">
            <h1 class="h1slick">slickスライドが動かないときはこうしてみる</h1>
            <div class="slider sliderFv">
                <figure class="slick-img">
                    <picture>
                        <source media="(min-width: 768px)" srcset="img/slider_sozai/neko_01.jpg"><!--PC画像-->
                        <source media="(max-width: 767px)" srcset="img/slider_sozai/neko_01.jpg"><!--SP画像-->
                        <img loading="lazy" src="img/slider_sozai/neko_01.jpg" alt="" width="1600" height="1066">
                    </picture>
                </figure>
                <figure class="slick-img">
                    <picture>
                        <source media="(min-width: 768px)" srcset="img/slider_sozai/neko_02.jpg"><!--PC画像-->
                        <source media="(max-width: 767px)" srcset="img/slider_sozai/neko_02.jpg"><!--SP画像-->
                        <img loading="lazy" src="img/slider_sozai/neko_02.jpg" alt="" width="1600" height="1066">
                    </picture>
                </figure>
            </div>
        </section>

        <section id="swipperarea" class="swipperarea">
            <h1 class="h1swipper">swiperスライドが動かないときはこうしてみる</h1>
            <p>
                swiperオプションがDOM読み込み前に実行される状態になっているのが原因
                今回は最初の HTML 文書の読み込みと解析が完了したとき、スタイルシート、画像、サブフレームの読み込みが完了するのを待たずに発生する
                以下を設定。<br>
            <pre><code>window.addEventListener('DOMContentLoaded', function () {}, false);</code></pre>

            <br><br>
            その他、以下のdom読み込み完了後に実行されるようにする記述でも読み込むことができた。<br>
            <pre><code>(window.onload = function() {})();</code></pre>


            </p>
            <!--swipper-->
            <div class="swiper-container">
                <div class="swipper sample01">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="img/slider_sozai/umi_01.jpg" width="" height=""></div>
                        <div class="swiper-slide"><img src="img/slider_sozai/umi_02.jpg" width="" height=""></div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <style>
                .swiper-container{
                    position: relative;
                }
                .swipper{
                    width: 100%; overflow: hidden;
                }
                /* 前への矢印 */
                .swiper-button-prev {
                    left: -30px;
                }
                /* 次への矢印 */
                .swiper-button-next {
                    right: -30px;
                }
                /* ページネーション */
                .swiper-horizontal > .swiper-pagination-bullets,
                .swiper-pagination-bullets.swiper-pagination-horizontal,
                .swiper-pagination-custom,
                .swiper-pagination-fraction {
                    bottom: -25px;
                }
            </style>
        </section>
    </div>
</body>



