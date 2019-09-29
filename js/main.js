$(function(){
  $("a[href^='#']").click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('html,body').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

function showElementAnimation() {
  var element = document.getElementsByClassName('js-hidden');
  if(!element) return; // 要素がなかったら処理をキャンセル


  var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
  var scrollY = window.pageYOffset;
  var windowH = window.innerHeight;

  for(var index=0;index<element.length;index++) {
    var elemClientRect = element[index].getBoundingClientRect();
    var elemY = scrollY + elemClientRect.top;
    if(scrollY + windowH - showTiming > elemY) {
      element[index].classList.add('js-is-show');
    } else if(scrollY + windowH < elemY) {
      element[index].classList.remove('js-is-show');
    }
  }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);
