
window.addEventListener('DOMContentLoaded', function () {
    const mySwiper = new Swiper('.swiper', {
        loop: true,
        centeredSlides : true, //画像中央に配置
        allowTouchMove: false,//マウスでのスワイプを禁止
        //loopAdditionalSlides: 6, //スライダーを複製してループを滑らかにする
        slidesPerView: 3, //１度に表示させる枚数（４.2枚）
        spaceBetween: 10,
         //effect: 'fade',
        speed: 2000,
        autoplay: {
           delay: 10000, //１秒後に次のスライドへ
            //disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
        },
        
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

   
    //モーダル表示
    $(".video-open").modaal({
        overlay_close:true,
        type: 'video',
        background: '#28BFE7',
        overlay_opacity:0.8,     
     });
}, false);