<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta content="text/css" http-equiv="Content-Style-Type" />
    <meta content="text/javascript" http-equiv="Content-Script-Type" />
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta http-equiv="expires" content="86400">
    <meta http-equiv="Content-Language" content="ja">
    <meta name="format-detection" content="telephone=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="viewport-fit=cover,width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <script defer src="//code.jquery.com/jquery-3.3.1.js"></script>
    <script src="//cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <?php $nowpage = (empty($_SERVER['HTTPS']) ? 'http:/' : 'https:/') .$_SERVER['SCRIPT_FILENAME'];?>
    <?php $nowpageWithoutExtension = pathinfo($nowpage, PATHINFO_FILENAME);?>
    <script defer type='text/javascript' src="../../js/config.js"></script>
    <script defer type='text/javascript' src="../../js/sample/swipper/<?php echo $nowpageWithoutExtension; ?>.js?v=<?php echo date('Y-m-d-H-i-s'); ?>"></script>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
    <link rel="stylesheet" href="../../css/common.css?v=<?php echo date('Y-m-d-H-i-s'); ?>">
    <link rel="stylesheet" href="../../css/<?php echo $nowpageWithoutExtension; ?>.css?v=<?php echo date('Y-m-d-H-i-s'); ?>">
    <title>メニューデモ<?php echo $nowpageWithoutExtension; ?></title>
    <?php

?>
    <script defer>
    const nowpage = '<?=$nowpage?>';
    const nowpageWithoutExtension = '<?=$nowpageWithoutExtension?>';
    </script>


</head>