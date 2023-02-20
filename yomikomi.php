<!DOCTYPE html>
<html>

<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="//code.jquery.com/jquery-3.3.1.js"></script>
    <script type='text/javascript' src="js/yomikomi.js?ver=<?php echo date('Y-m-d-H-i-s'); ?>"></script>
    <link rel="stylesheet" href="css/common.css?ver=<?php echo date('Y-m-d-H-i-s'); ?>">
</head>

<body>

    <div class="continer">

    </div>
    <div class="content" style="margin:10% 0 0 0;">
        <h2><span style="background:rgb(255, 0, 85,0.6);">ready</span>:<span style="background:rgb(255, 0, 85,0.6);">DOMツリーの構築が完了</span>したら実行される。</h2>
        <p>
            htmlを置き換えるものや、表示するかしないかを制御するもの ラジオボタンが選ばれていたら、表示する など<br>
            ウインドウサイズによって決まるもの eスムーススクロールのコンテンツのポジション取得 など(場合によっては、rezsizeイベントも必要)<br>
            読み込み時間をカモフラージュするためのアニメーションなど
        </p>
        <h2><span style="background:rgb(255, 169, 42,0.6);">load</span>:<span style="background:rgb(255, 169, 42,0.6);">画像、動画</span>などの関連データの全ての読み込みが完了したら実行される。</h2>
        <p>
            画像の大きさを取得するものや、画像の大きさによって可変するもの<br>
            ページ遷移時に表示するアニメーション(特にスマホは、readyにしてしまうと、ページが表示されたときにはもう終わっていたりする…)<br>
            ※JSのwindow.onloadは最後のみ実行さてしまう
        </p>
    </div>

</body>

</html>