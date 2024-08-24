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

      // goToTop icon
    function showBtnCondition() {
      if ($(this).scrollTop() > 600) {
        $('#goToTop').fadeIn();
      } 
      else {
        $('#goToTop').fadeOut();
      }
    }
    $(window).scroll(showBtnCondition);
    
    $('#goToTop').click(function (e) { 
      $('html,body').animate({scrollTop: 0}, 800);
    });

    // $('#goToTop').on('mouseover', function () {
    //   $('.fa-circle-up').attr('style', 'color:red');
    // });
    
    // $('#goToTop').on('mouseleave', function () {
    //   $('.fa-circle-up').attr('style', 'color:#FFD43B');
    // });
    

    // menu dropdown-open
    $('.dropdown1').click(function (e) { 
      e.preventDefault();
      $('.dropdown1').toggleClass('active');
      $('.drop2').slideUp();
      $('.drop1').slideToggle('fast');
      $('.dropdown2').removeClass('active2');
      
    });
    $('.dropdown2').click(function (e) { 
      e.preventDefault();
      $('.dropdown2').toggleClass('active2');
      $('.drop1').slideUp();
      $('.drop2').slideToggle('fast');
      $('.dropdown1').removeClass('active');
      
    });
});