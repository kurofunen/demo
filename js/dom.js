console.log(document.head);
console.log(document.body);
console.log(window.location.href);
console.log(document.getElementById('first-list')); 

const headings = document.getElementsByClassName('heading');
for (let i = 0; i < headings.length; i++) {
    console.log(headings[i]);
  }

let select = document.querySelectorAll('h1');
console.log(select[0]);

const list = document.getElementsByClassName('list');
for (let i = 0; i < list.length; i++){
    //console.log(list[i]);
}


//定数を代入
const li = document.createElement('li');
// 作成したli要素にテキストを追加する
li.textContent='JavaScriptで新しく作成したリスト3';
// ul要素の末尾にli要素を追加する
let listitem = document.querySelector('ul').appendChild(li);

$('ul li').each(function(index) {
    $(this).addClass('icchi'+index);
});
  

$('li[class*="icchi0"]').css("background", "red");
$('li[class^="list"]').css("background", "green");
$('li[class$="i2"]').css("background", "blue");







