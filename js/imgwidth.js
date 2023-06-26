//$(window).on('load', function () {
//    if (window.innerWidth > 1024) {
//        console.log("PC");
//        $('img[src*=".jpg"]').on('inview', function (event, isInView) {
//            if (isInView) {
//                $(this).addClass('active');
//                let width = Math.ceil($(this).width());
//                $(this).css({'max-width': width,'width':'100%'});
//            }
//        });
//        $('img[src*=".png"]').on('inview', function (event, isInView) {
//            if (isInView) {
//                $(this).addClass('active');
//                let width = Math.ceil($(this).width());
//                $(this).css({'max-width': width,'width':'100%'});
//            }
//        });
//    }
//     else{
//         $('img').css({'max-width': '100%','width':'100%'});
//          console.log("SP");  
//    }
//});


    
// $("img").bind("load", function () {
//    let height = $(this).height();
//    let width = $(this).width();
//    console.log(height);
//    console.log(height);

// });

//関数定義
const myFunc = function(src){
    return new Promise(function(resolve, reject){
        const image = new Image();
        image.src = src;
        image.onload = function () {
            resolve(image);
        }
        image.onerror = function(error){
            reject(error);
        }
    });
}
const imgs = document.getElementsByTagName('img');

for (const img of imgs) {
    const src = img.getAttribute('src');
    if (src.endsWith('.svg')) {//endsWith() 文字列が引数で指定された文字列で終わるかを判定してtrueかfalseを返す
        continue;
    }
    myFunc(src)
        .then(function (res) {
            img.setAttribute('width', Math.ceil(res.width));
            img.setAttribute('height', Math.ceil(res.height));
           
            // if (res.parentNode < Math.ceil(res.width)) {
            //     img.style.maxWidth = '100%';
            //     img.style.height = 'auto';  
            // }
        })
        
    .catch(function(error){
        console.log(error);
    });
}








