console.log('hello,gulp.lol');
console.log('hello,gulp.lol sinda');
jQuery(function($){


  $(window).on('scroll',function(){
    rcHeight = $('.rc-search-wrap').innerHeight();
    rcwHeight = $('.rc-wrap').innerHeight();
    rightcolHeight = rcHeight + rcwHeight;
    scrollHeight = $(window).height() + $(window).scrollTop();
    console.log(rightcolHeight);
    console.log(scrollHeight);

    if(scrollHeight > rightcolHeight)
    {
      $('.rc-wrap').addClass('fixed');
    } else {
      $('.rc-wrap').removeClass('fixed');
    }
  });

});
// 画像が縦方向に長い場合widthではなくheightが100%になるコードのつもり(失敗)

// var rc_img = document.querySelectorAll('.rc-img');
// var rc_imgwrap = document.querySelectorAll('.rc-imgwrap');
// for(var i=0; i<rc_img.length; i++){
//   if(rc_img[i].style.height <= rc_imgwrap[i].style.height){
//     rc_img[i].classList.add('tate');
//   }
//   console.log(rc_img[i].style.height);
//   console.log(rc_imgwrap[i].style.height);
//
// }
