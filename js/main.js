$(function (){

  /* main slide */
  var swiper = new Swiper(".main-slider", {
    // spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  /* notice-tab */
  $('.tab-tit>li').click(function(){
    var tabNum = $(this).attr('data-tab');

    $('.tab-tit>li').removeClass('on');
    $('.tab-cont>div').removeClass('on');

    $(this).addClass('on');
    $('#'+tabNum).addClass('on');
  })


})

