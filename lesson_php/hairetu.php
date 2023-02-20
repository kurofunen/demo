<?php
$arry = [1,2,3,4];
print_r($arry);

$arry2 = [
    0=>"1番目",
    1=>"2番目",
    3=>"3番目",
    4=>"4番目"
];
echo nl2br($arry[1].PHP_EOL.$arry2[0].PHP_EOL);

?>

<?php echo nl2br("変数numに0～4までのランダムな整数を代入する".PHP_EOL."変数numの値が4であれば、「大当たりです」という文字列を出力する")."<br>";?>
<?php 
$num = mt_rand(0,4);
echo $num;
if($num==4){
    echo "大当たりです";
}else{
    echo "はずれ";
}

?>

