$(function () {
  
    $('.contents').each(function(i, elem){
        var contentsPOS = $(elem).offset().top;
      $(window).on('load scroll resize', function () {
            var scrollTop = $(window).scrollTop();
            var showClass = 'show';
            var timing = 500;
            if (scrollTop >= contentsPOS - timing){
              $(elem).addClass(showClass);
              
            } else {
              $(elem).removeClass(showClass);
            }
        });
    });
});