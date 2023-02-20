<head>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <link rel="stylesheet" href="css/common.css?v=<?php echo date('Y-m-d-H-i-s'); ?>">
    <meta charset="utf-8" />
    <title>slickスライダ</title>
</head>


<div class="gaufrierProducts">
    <div class="wapper gaufrierProductsInfo">
    <div class="display_flex_stretch display_row gaufrierProductsInfoFx">
        <section class="secGaufrierProductsInfo">
            <h2 class="h2GaufrierProductsInfo">
                <picture>
                    <source media="(min-width: 768px)" srcset="img/h2GaufrierProductsInfoPc.png"><!--PC画像-->
                    <source media="(max-width: 768px)" srcset="img/h2GaufrierProductsInfoSp.png"><!--SP画像-->
                    <img src="img/h2GaufrierProductsInfoPc.png" alt="ゴーフレール" width="490" height="130">
                </picture>
            </h2>
            <p class="cl_fff text_justify txtGaufrierProductsInfo">
                サクサクの薄焼き生地にクリームをサンドし、チョコ<br class="pc_only">レートでコーティングしたミルフィーユショコラです。<br>定番の風味に加え、この時期限定のゴーフレールをご用意いたします。
            </p>
        </section>
        <div class="sliderGaufrierProductsInfoWap">
            <div class="sliderGaufrierProductsInfoTopWap">
                <ul class="sliderGaufrierProductTop jsSliderGaufrierProductTop">
                    <?php for ($i=0;$i<=2;$i++): ?>
                    <li class="liSliderGaufrierProductsInfoTop">
                        <picture>
                            <source media="(min-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoTop00Pc.jpg"><!--PC画像-->
                            <source media="(max-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoTop00Sp.jpg"><!--SP画像-->
                            <img src="img/photoSliderGaufrierProductsInfoTop00Pc.jpg" alt="GAUFRIER" width="647" height="647">
                        </picture>
                    </li>
                    <li class="liSliderGaufrierProductsInfoTop">
                        <picture>
                            <source media="(min-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoTop01Pc.jpg"><!--PC画像-->
                            <source media="(max-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoTop01Sp.jpg"><!--SP画像-->
                            <img src="img/photoSliderGaufrierProductsInfoTop01Pc.jpg" alt="GAUFRIER" width="647" height="647">
                        </picture>
                    </li>
                    <li class="liSliderGaufrierProductsInfoTop">
                        <picture>
                            <source media="(min-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoTop02Pc.jpg"><!--PC画像-->
                            <source media="(max-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoTop02Sp.jpg"><!--SP画像-->
                            <img src="img/photoSliderGaufrierProductsInfoTop02Pc.jpg" alt="GAUFRIER" width="647" height="647">
                        </picture>
                    </li>
                    <li class="liSliderGaufrierProductsInfoTop">
                        <picture>
                            <source media="(min-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoTop03Pc.jpg"><!--PC画像-->
                            <source media="(max-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoTop03Sp.jpg"><!--SP画像-->
                            <img src="img/photoSliderGaufrierProductsInfoTop03Pc.jpg" alt="GAUFRIER" width="647" height="647">
                        </picture>
                    </li>
                    <li class="liSliderGaufrierProductsInfoTop">
                        <picture>
                            <source media="(min-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoTop04Pc.jpg"><!--PC画像-->
                            <source media="(max-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoTop04Sp.jpg"><!--SP画像-->
                            <img src="img/photoSliderGaufrierProductsInfoTop04Pc.jpg" alt="GAUFRIER" width="647" height="647">
                        </picture>
                    </li>
                    <?php endfor; ?>
                </ul>
            </div>

            <div class="sliderGaufrierProductsInfoBtmWap">
                <ul class="sliderGaufrierProductBtm jsSliderGaufrierProductBtm">
                    <?php for ($i=0;$i<=2;$i++): ?>
                    <li class="liSliderGaufrierProductsInfoBtm">
                        <picture>
                            <source media="(min-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoBtm00Pc.jpg"><!--PC画像-->
                            <source media="(max-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoBtm00Sp.jpg"><!--SP画像-->
                            <img src="img/photoSliderGaufrierProductsInfoBtm00Pc.jpg" alt="GAUFRIER" width="132" height="132">
                        </picture>
                    </li>
                    <li class="liSliderGaufrierProductsInfoBtm">
                        <picture>
                            <source media="(min-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoBtm01Pc.jpg"><!--PC画像-->
                            <source media="(max-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoBtm01Sp.jpg"><!--SP画像-->
                            <img src="img/photoSliderGaufrierProductsInfoBtm01Pc.jpg" alt="GAUFRIER" width="132" height="132">
                        </picture>
                    </li>
                    <li class="liSliderGaufrierProductsInfoBtm">
                        <picture>
                            <source media="(min-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoBtm02Pc.jpg"><!--PC画像-->
                            <source media="(max-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoBtm02Sp.jpg"><!--SP画像-->
                            <img src="img/photoSliderGaufrierProductsInfoBtm02Pc.jpg" alt="GAUFRIER" width="132" height="132">
                        </picture>
                    </li>
                    <li class="liSliderGaufrierProductsInfoBtm">
                        <picture>
                            <source media="(min-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoBtm03Pc.jpg"><!--PC画像-->
                            <source media="(max-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoBtm03Sp.jpg"><!--SP画像-->
                            <img src="img/photoSliderGaufrierProductsInfoBtm03Pc.jpg" alt="GAUFRIER" width="132" height="132">
                        </picture>
                    </li>
                    <li class="liSliderGaufrierProductsInfoBtm">
                        <picture>
                            <source media="(min-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoBtm04Pc.jpg"><!--PC画像-->
                            <source media="(max-width: 768px)" srcset="img/photoSliderGaufrierProductsInfoBtm04Sp.jpg"><!--SP画像-->
                            <img src="img/photoSliderGaufrierProductsInfoBtm04Pc.jpg" alt="GAUFRIER" width="132" height="132">
                        </picture>
                    </li>
                    <?php endfor; ?>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>
 

            
<script src="js/slickslider.js"></script>