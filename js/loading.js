const handleTouchMove = (event) => {
  event.preventDefault();
}
// document.addEventListener('touchmove', handleTouchMove, { passive: false }); 
// console.log("スクロール禁止");
// 		document.removeEventListener('touchmove', handleTouchMove, { passive: false }); 
// 		console.log("スクロール復帰");

function close_index_loading() {
    $.when(
            $(".loadingsCover").fadeIn(300).delay(3000).fadeOut(1000),
            $(".picloadings").fadeIn(500).delay(1000).fadeOut(1000),
            $('.loadings').delay(3000).fadeOut(1000),
        )
        .done(function () {
            $('.listcnt').addClass('active')
        })
}
setTimeout("close_index_loading()", 1000);








