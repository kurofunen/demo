<!DOCTYPE html>


<head>
    <script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
    <script type='text/javascript' src='//cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js'></script>
    <script type='text/javascript' src="js/swipper_jimmy.js"></script>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">
    <link rel='stylesheet' id='theme_base_css' href='css/common.css?ver=<?php echo date('Y-m-d-H-i-s'); ?>'>

</head>

<body>
    <div class="swiper swiper01">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <!-- img 要素から背景画像（background-image）に変更-->
                <div class="slide-img" style="background-image: url('img/slider_sozai/neko_01.jpg')"></div>
                <div class="slide-content">
                    <h1 class="from_bottomwap">
                        Slide Title 01
                    </h1>
                    <p class="fromBottom02wap">
                        Ullam rerum quasi libero esse
                    </p>

                </div>
            </div>
            <div class="swiper-slide">
                <!-- img 要素から背景画像（background-image）に変更-->
                <div class="slide-img" style="background-image: url('img/slider_sozai/neko_02.jpg')"></div>
                <div class="slide-content">
                    <h1 class="from_bottomwap">
                        Slide Title 02
                    </h1>
                    <p class="fromBottom02wap">
                        Ullam rerum quasi libero esse
                    </p>

                </div>
            </div>
            <div class="swiper-slide">
                <!-- img 要素から背景画像（background-image）に変更-->
                <div class="slide-img" style="background-image: url('img/slider_sozai/neko_03.jpg')"></div>
                <div class="slide-content">
                    <h1 class="from_bottomwap">
                        Slide Title 03
                    </h1>
                    <p class="fromBottom02wap">
                        Ullam rerum quasi libero esse
                    </p>

                </div>
            </div>
        </div><!-- end of .swiper-wrapper -->
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div><!-- end of .swiper -->

    <!-- スライダー -->
    <div id="slider" class="secmargin wapper">
        <div class="swiper slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog01.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog02.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog03.jpg" alt="" />
                </div>
            </div>
            <!-- 前後の矢印 -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>

        <!-- サムネイル -->
        <div id="slider-thumbnail" class="swiper slider-thumbnail">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog01.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog02.jpg" alt="" />
                </div>
                <div class="swiper-slide">
                    <img src="https://junpei-sugiyama.com/wp-content/uploads/2021/01/dog03.jpg" alt="" />
                </div>
            </div>
        </div>

    </div>

</body>