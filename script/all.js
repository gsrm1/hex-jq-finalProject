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

    //   goToTop icon
    $('.goToTop').on('mouseover', function () {
        $('.fa-circle-up').attr('style', 'color: red');
    });

    $('.goToTop').on('mouseleave', function () {
        $('.fa-circle-up').attr('style', 'color: #FFD43B');
    });

    $('.goToTop').click(function (e) { 
        $('html,body').animate({scrollTop: 0}, 800);
    });
});