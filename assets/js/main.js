(function($) {
  "use strict";
  
 // menu 
 $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
  }); 


  $("select").niceSelect();


  
  // owlCarousel
  $(".ft__org__slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });

  
  // owlCarousel
  $(".Reminder__slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 1,
    navText: [
      '<i><img src="assets/img/all-icons/left-arr.svg" alt=""></i>',
      '<i><img src="assets/img/all-icons/right-arr.svg" alt=""></i>'
    ],
    nav: true,
    dots: true
  });
  
  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });



  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
