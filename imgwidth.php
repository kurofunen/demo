<html lang="ja">

<head>
    <meta charset="utf-8" />
    <title>画像のmax-width設定</title>
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.3.5/dist/alpine.min.js" defer></script>
    <script async src="js/inview.min.js"></script>
    <script async src="js/imgwidth.js"></script>
</head>

<body>
    <style>
    img {
        max-width: 100%;
        height: auto;
    }

    .endFig {
        width: 370px;
    }
    </style>
    <div class="wapper">
        <figure class="svgFig">
            <img loading="lazy" src="img/iconsvg.svg" width="150" height="150">
        </figure>
        <figure class="endFig">
            <img loading="lazy" src="img/samenyan.jpg" width="1000" height="210">
        </figure>
        <figure class="nekoselebuFig">
            <img loading="lazy" src="img/fixed.jpg" width="300" height="586">
        </figure>
        <figure class="nyanpointer">
            <img loading="lazy" src="img/nyanpointer.jpg" width="1000" height="125">
        </figure>
        <figure class="nekoselebu">
            <img loading="lazy" src="img/nekoselebu.jpg" width="370" height="123">
        </figure>
        <figure class="baki">
            <img loading="lazy" src="img/baki.jpg" width="1219" height="944">
        </figure>

    </div>
</body>

</html>