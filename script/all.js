$(document).ready(function () {
    // swiper settings
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      });

    //   lightbox2 settings
    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true,
        'disableScrolling': true
      })

    // goToTop icon（使用捲動百分比觸發按鈕）
  function showBtnCondition(){
  const scrollTop = $(this).scrollTop();
  const docHeight = $(document).height();
  const windowHeight = $(window).height();
  const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
  if (scrollPercent > 70){
    $('#goToTop').fadeIn();
  }
  else{
    $('#goToTop').fadeOut();
  }
}
  $(window).scroll(showBtnCondition);

    // 舊方法（使用滾動px、但遇到高解析度螢幕會失去功能）
    // function showBtnCondition() {
    //   if ($(this).scrollTop() > 800) {
    //     $('#goToTop').fadeIn();
    //   } 
    //   else {
    //     $('#goToTop').fadeOut();
    //   }
    // }
    // $(window).scroll(showBtnCondition);
    
    $('#goToTop').click(function (e) { 
      $('html,body').animate({scrollTop: 0}, 800);
    });
    
    // 應使用如下.css改變樣式而不是用.attr
    $('#goToTop').on('mouseover', function () {
      $('.fa-circle-up').css('color', 'red');
    });
    
    $('#goToTop').on('mouseleave', function () {
      $('.fa-circle-up').css('color', '#FFD43B');
    });
    

    // menu dropdown-open
    $('.dropdown1').click(function (e) { 
      e.preventDefault();
      $('.dropdown1').toggleClass('active').siblings('.dropdown2').removeClass('active2');
      $('.drop1').slideToggle('fast');
      $('.drop2').slideUp();
    });

    $('.dropdown2').click(function (e) { 
      e.preventDefault();
      $('.dropdown2').toggleClass('active2').siblings('.dropdown1').removeClass('active');
      $('.drop2').slideToggle('fast');
      $('.drop1').slideUp();
    });
});

$(document).ready(function () {
  $(selector).click(function (e) { 
    e.preventDefault();
    $(selector).addClass(className);
    $(selector).toggleClass(className);
    jqsh
  });
});