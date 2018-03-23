($(document).ready(function() {
  // 1、使用swiper生成轮播
  new Swiper('.banner.swiper-container', {
    loop: true,
    // 小圆点分页器
    pagination: {
      el: '.swiper-pagination',
    },
    effect: 'fade',
    fadeEffect: {  // 淡入淡出
      delay: 3000,
      crossFade: true,
    },
    autoplay: {  // 配置无限循环轮播
      delay: 3000,
      disableOnInteraction: false,
    }
  })
}))()