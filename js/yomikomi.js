$(window).on('load', function () {
    console.time("$(window).on(\'load\',function()\'を読み込んだよ");

    console.timeEnd("$(window).on(\'load\',function()\'を読み込んだよ");
    $('.continer').append('<p>0番目に書いてる<br>$(window).on(\'load\',function()\'を読み込んだよ</p>');
});
$(function func01() {
    console.time("$(function()を読み込んだよ");
    console.timeEnd("$(function()を読み込んだよ");
    $('.continer').append('1番目に書いてる<br><p>$(function()を読み込んだよ</p>');
});

$(document).ready(function () {
    console.time("$(document).ready(function ()");
    console.timeEnd("$(document).ready(function ()");
    $('.continer').append('<p>2番目に書いてる<br>$(document).ready(function () </p>');
});

document.addEventListener('DOMContentLoaded', function () {
    console.time("addEventListener(\'DOMContentLoaded\'function ()を読み込んだよ");

    console.timeEnd("addEventListener(\'DOMContentLoaded\'function ()を読み込んだよ");
    $('.continer').append('<p>3番目に書いてる<br>addEventListener(\'DOMContentLoaded\'function ()を読み込んだよ</p>');
}, false);

$(window).on('load', function () {
    console.time("$(window).on(\'load\',function()\'を読み込んだよ");

    console.timeEnd("$(window).on(\'load\',function()\'を読み込んだよ");
    $('.continer').append('<p>4番目に書いてる<br>$(window).on(\'load\',function()\'を読み込んだよ</p>');
});
