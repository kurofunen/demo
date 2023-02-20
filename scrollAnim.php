<html lang="ja">

<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
    <script async src="js/scrollAnim.js"></script>
    <link rel="stylesheet" href="css/common.css?v=<?php echo date('Y-m-d-H-i-s'); ?>">
    <meta charset="utf-8" />
    <title>スクロールアニメーション01　GSAPScrollTriger</title>
</head>

<body>
    <style>
    .contents {
        padding: 10vh 0 0 0;
        position: relative;
        z-index: 2;
    }

    .leafs02 {
        height: 100vh;
        overflow: hidden;
        background-size: 100% auto;
        background-image: url("img/scroll/01.gif");
        background-position: center top;
        background-repeat: no-repeat;
    }

    .jsleft {
        width: 50%;
    }

    .jsright {
        width: 50%;
    }

    .jsul {
        display: flex;
        justify-content: space-around;
    }

    .jsul li {
        width: 30px;
        opacity: 0;
        transform: rotate(270deg);
    }

    .l_jsli01 {}
    </style>
    <div class="tunagi">
        <p class="tunagi_pref">
            スクロールでSVG画像を動かします。
        </p>
    </div>
    <div id="content content02">
        <div class="leafs leafs02">
            <div class="jsleft">
                <ul class="jsul jsulLeft">
                    <li class="l_jsli01">
                        <svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71.7 48.4"
                            style="enable-background:new 0 0 71.7 48.4;" xml:space="preserve">
                            <style type="text/css">
                            .st0 {
                                fill: #56B746;
                            }
                            </style>
                            <path class="st0" d="M53.9,45.3" />
                            <path class="st0" d="M44.8,48.3C57,50.6,82,28.8,67,15.7l0,0c0-0.1,0-0.1,0-0.2C65.2,5.8,61.8,0,51.3,0.4C39.2-1,27.9,3.8,21,13.4
                              c0,0.1-0.1,0.2-0.1,0.3C15.7,20,12.5,30,10.2,33.6c-0.2,0.7-5.3,6.6-5.3,7.1H5l-0.1,0.1c-0.6,0.9,4.2,1,5.4,1.4
                              c4.1,0.8,6.5,2.3,12.3,3.3" />
                            <path class="st0"
                                d="M30.4,48.3C30.4,48.4,30.7,48.4,30.4,48.3C30.5,48.3,30.5,48.3,30.4,48.3z" />
                        </svg>
                    </li>
                    <li class="l_jsli02">
                        <svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71.7 48.4"
                            style="enable-background:new 0 0 71.7 48.4;" xml:space="preserve">
                            <style type="text/css">
                            .st0 {
                                fill: #56B746;
                            }
                            </style>
                            <path class="st0" d="M53.9,45.3" />
                            <path class="st0" d="M44.8,48.3C57,50.6,82,28.8,67,15.7l0,0c0-0.1,0-0.1,0-0.2C65.2,5.8,61.8,0,51.3,0.4C39.2-1,27.9,3.8,21,13.4
                              c0,0.1-0.1,0.2-0.1,0.3C15.7,20,12.5,30,10.2,33.6c-0.2,0.7-5.3,6.6-5.3,7.1H5l-0.1,0.1c-0.6,0.9,4.2,1,5.4,1.4
                              c4.1,0.8,6.5,2.3,12.3,3.3" />
                            <path class="st0"
                                d="M30.4,48.3C30.4,48.4,30.7,48.4,30.4,48.3C30.5,48.3,30.5,48.3,30.4,48.3z" />
                        </svg>
                    </li>
                    <li class="l_jsli03">
                        <svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71.7 48.4"
                            style="enable-background:new 0 0 71.7 48.4;" xml:space="preserve">
                            <style type="text/css">
                            .st0 {
                                fill: #56B746;
                            }
                            </style>
                            <path class="st0" d="M53.9,45.3" />
                            <path class="st0" d="M44.8,48.3C57,50.6,82,28.8,67,15.7l0,0c0-0.1,0-0.1,0-0.2C65.2,5.8,61.8,0,51.3,0.4C39.2-1,27.9,3.8,21,13.4
                              c0,0.1-0.1,0.2-0.1,0.3C15.7,20,12.5,30,10.2,33.6c-0.2,0.7-5.3,6.6-5.3,7.1H5l-0.1,0.1c-0.6,0.9,4.2,1,5.4,1.4
                              c4.1,0.8,6.5,2.3,12.3,3.3" />
                            <path class="st0"
                                d="M30.4,48.3C30.4,48.4,30.7,48.4,30.4,48.3C30.5,48.3,30.5,48.3,30.4,48.3z" />
                        </svg>
                    </li>
                </ul>
            </div>
            <div class="jsright">
                <ul class="jsul jsulRight">
                    <li class="r_jsli01"><svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71.7 48.4"
                            style="enable-background:new 0 0 71.7 48.4;" xml:space="preserve">
                            <style type="text/css">
                            .st0 {
                                fill: #56B746;
                            }
                            </style>
                            <path class="st0" d="M53.9,45.3" />
                            <path class="st0" d="M53.9,45.3c5.8-1,8.2-2.5,12.3-3.3c1.2-0.4,6-0.5,5.4-1.4c0,0-0.1-0.1-0.1-0.1c0,0,0.1,0,0.1,0
                              c0-0.5-5.1-6.4-5.3-7.1c-2.3-3.6-5.5-13.6-10.7-19.9c0-0.1-0.1-0.2-0.1-0.3c-6.9-9.6-18.2-14.4-30.3-13C14.7-0.2,11.3,5.6,9.5,15.3
                              c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0C-5.5,28.6,19.5,50.4,31.7,48.1" />
                            <path class="st0"
                                d="M30.4,48.3C30.4,48.4,30.7,48.4,30.4,48.3C30.5,48.3,30.5,48.3,30.4,48.3z" />
                        </svg>
                    </li>
                    <li class="r_jsli02"><svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71.7 48.4"
                            style="enable-background:new 0 0 71.7 48.4;" xml:space="preserve">
                            <style type="text/css">
                            .st0 {
                                fill: #56B746;
                            }
                            </style>
                            <path class="st0" d="M53.9,45.3" />
                            <path class="st0" d="M53.9,45.3c5.8-1,8.2-2.5,12.3-3.3c1.2-0.4,6-0.5,5.4-1.4c0,0-0.1-0.1-0.1-0.1c0,0,0.1,0,0.1,0
                              c0-0.5-5.1-6.4-5.3-7.1c-2.3-3.6-5.5-13.6-10.7-19.9c0-0.1-0.1-0.2-0.1-0.3c-6.9-9.6-18.2-14.4-30.3-13C14.7-0.2,11.3,5.6,9.5,15.3
                              c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0C-5.5,28.6,19.5,50.4,31.7,48.1" />
                            <path class="st0"
                                d="M30.4,48.3C30.4,48.4,30.7,48.4,30.4,48.3C30.5,48.3,30.5,48.3,30.4,48.3z" />
                        </svg>
                    </li>
                    <li class="r_jsli03"><svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71.7 48.4"
                            style="enable-background:new 0 0 71.7 48.4;" xml:space="preserve">
                            <style type="text/css">
                            .st0 {
                                fill: #56B746;
                            }
                            </style>
                            <path class="st0" d="M53.9,45.3" />
                            <path class="st0" d="M53.9,45.3c5.8-1,8.2-2.5,12.3-3.3c1.2-0.4,6-0.5,5.4-1.4c0,0-0.1-0.1-0.1-0.1c0,0,0.1,0,0.1,0
                              c0-0.5-5.1-6.4-5.3-7.1c-2.3-3.6-5.5-13.6-10.7-19.9c0-0.1-0.1-0.2-0.1-0.3c-6.9-9.6-18.2-14.4-30.3-13C14.7-0.2,11.3,5.6,9.5,15.3
                              c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0C-5.5,28.6,19.5,50.4,31.7,48.1" />
                            <path class="st0"
                                d="M30.4,48.3C30.4,48.4,30.7,48.4,30.4,48.3C30.5,48.3,30.5,48.3,30.4,48.3z" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</body>

</html>