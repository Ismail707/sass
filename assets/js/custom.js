(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

    // START MENU JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >50) {
            $('.navbar-light').addClass('menu-shrink');
        } else {
            $('.navbar-light').removeClass('menu-shrink');
        }
    });			
    $('.navbar-nav .nav-item .nav-link').on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 100
        }, 1500);
        e.preventDefault();
    });
    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
            $(this).collapse('hide');
        }
    });		
    // END MENU JS
    
    // Slick Slider JS
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        prevArrow: '<i class="icofont-simple-left arrow-left"></i>',
        nextArrow: '<i class="icofont-simple-right arrow-right"></i>',
        centerMode: true,
        focusOnSelect: true,
        variableWidth: true,
        // responsive: [
        //     {
        //         breakpoint: 3000,
        //         setting: {
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 1400,
        //         setting: {
        //             slidesToShow: 2
        //         }

        //     },
        //     {
        //         breakpoint: 800,
        //         setting: {
        //             slidesToShow: 1
        //         }

        //     }
        // ]
      });
     
      $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
      });

    // CounterUp JS
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // News Slider JS
    $('.logo-slider').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:5,
            }
        }
        
    });

    // WOW JS
    new WOW().init();

    // Popup youtube JS
    $('.popup-youtube').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Back to top 
    $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-arrow-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 900);
        return false;
    });

    // PRELOADER
    jQuery(window).on('load',function(){
        jQuery(".loader").fadeOut(500);
    });


}); 	
})(jQuery);