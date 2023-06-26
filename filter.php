<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta content="text/css" http-equiv="Content-Style-Type" />
    <meta content="text/javascript" http-equiv="Content-Script-Type" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta http-equiv="expires" content="86400">
    <meta http-equiv="Content-Language" content="ja">
    <meta name="Robots" content="noodp">
    <title>フィルターアニメーション</title>
    <script defer type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
</head>
<style>
    p {
        display: inset-block;
        margin: 0 auto;
    }
</style>
<p>anime</p>
<div class="mihofilter">
    <svg viewbox="-300 0 600 400" width="600" height="400">
        <defs>
            <!-- 手描き感のあるラフな表現を加えるフィルターの定義 -->
            <filter id="roughFilter" filterUnits="objectBoundingBox" x="0" y="0" width="110%" height="110%">
                <!-- ノイズを生成する原始フィルター -->
                <!--feTurbulence "type=turbulence/fractalNoise"  |  粗さ　baseFrequency:数値  |  パーツの数？　numOctaves-->
                <feTurbulence type="turbulence" baseFrequency="0.001 0.01" numOctaves="5" seed="1" stitchTiles="stitch">
                    <!-- ノイズのシードをアニメーションで変化させる -->
                    <animate attributeName="seed" from="1" to="100" dur="10s" repeatCount="indefinite" />
                </feTurbulence>
                <!-- ノイズを元に画像を歪める -->
                <feDisplacementMap in="SourceGraphic" scale="10" />
            </filter>
        </defs>
        <!-- 定義したフィルターを適用 -->
        <image href="img/kimawari.svg" filter="url(#roughFilter)" transform="translate(-100 100)" width="200"
            height="200" />
    </svg>
</div>


<div class="filterfig">

</div>
<svg viewbox="-300 0 600 400" width="600" height="400">
    <defs>
        <!-- 手描き感のあるラフな表現を加えるフィルターの定義 -->
        <filter id="filter">

            <feTurbulence type="fractalNoise" baseFrequency="0.1 0.01" numOctaves="500" seed="10" stitchTiles="stitch">
                <!-- ノイズのシードをアニメーションで変化させる -->
                <animate attributeName="seed" from="100" to="1" dur="10s" repeatCount="indefinite" />
            </feTurbulence>
            <!-- ノイズを元に画像を歪める -->
            <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
    </defs>
    <!-- 定義したフィルターを適用 -->
    <image href="img/kimawari.svg" filter="url(#filter)" transform="translate(-100 100)" width="200" height="200" />
</svg>
<style>
    .filterfig {}
</style>