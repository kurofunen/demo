<!DOCTYPE html>


<head>
    <script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

    <!-- <script src="https://unpkg.com/swiper@9/swiper-bundle.min.js"></script> -->
    <script src="//cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"></script>
    <script src="js/swipper_thumbs.js"></script>
    <!-- <link rel="stylesheet" href="https://unpkg.com/swiper@9/swiper-bundle.min.css"> -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">
    <link rel='stylesheet' id='theme_base_css' href='css/common.css?ver=<?php echo date('Y-m-d-H-i-s'); ?>'>
    <link rel='stylesheet' id='theme_base_css' href='css/swipper_thumbs.css?ver=<?php echo date('Y-m-d-H-i-s'); ?>'>
</head>

<body>
    <!-- スライダー -->
    <div class="wapper">
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
        <div class="swiper slider-thumbnail">
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