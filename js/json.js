//const url = 'https://www.zenkokuturiba.com/wp-json/wp/v2/posts/';
const url = 'http://mihomon.m36.coreserver.jp/mpage/wptest/wp-json/wp/v2/posts/196';
let rest_url = url+'?per_page=5&page=';
let page = 1;
let article = "";

//①初回とクリック時で都度読み込む テストではjsonpうまくいかず。。。
// $.getJSON(rest_url+page, function(json){
//     $.each(json, function (i, item) {
//         article += '<li>'+item.post_meta.address+'</li>\n';
//     });
//     $('.ArchiveArea').append(article);
// });
    
// $('.more').on('click' , function(){
//     page++;
//     $.getJSON(rest_url+page, function(json){
//         $.each(json, function (i, item) {
//             article += '<li>'+item.post_meta.address+'</li>\n';
//         });
//         $('.ArchiveArea').empty().append(article);
//     });
// });

//②コールバック関数で都度読み込む（結果都度getjsonを読み込むので同じ）テストではjsonpうまくいかず。。。
// function get_contents(rest_url,page) {
//     $.getJSON(rest_url + page, function (json) {
        
//         $.each(json, function (i, item) {
//             article += '<li>' + item.post_meta.address + '</li>\n';
            
//         });
//         $('.ArchiveArea').empty().append(article);
//     });
// }


// $(document).on("click", ".more", function(){
//    page++;
//     get_contents(rest_url, page);
// });
function get_contents(rest_url) {
    $.getJSON(rest_url , function (json) {
        
        $.each(json, function (i, item) {
            article += '<li>' + item.post_meta.address + '</li>\n';
            
        });
        $('.ArchiveArea').empty().append(article);
    });
}


$(document).on("click", ".more", function(){
    get_contents(rest_url);
});





 //指定された秒数だけ待つ deferred


   






    




