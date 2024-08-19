$(window).on('load', function() {
    'use strict';
    $('[data-loader="circle-side"]').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow':'visible'});
    $(window).scroll();

    $('.number').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

$(window).on('scroll', function() {
    'use strict';
    $('header').toggleClass('sticky', $(this).scrollTop() > 1);
});

new WOW().init();
$('#sidebar').theiaStickySidebar({ additionalMarginTop: 80 });

$(function() {
    'use strict';
    function centerModal() {
        var $dialog = $(this).find(".modal-dialog"),
            offset = Math.max(($(window).height() - $dialog.height()) / 2, parseInt($dialog.css('marginBottom'), 10));
        $dialog.css("margin-top", offset);
    }

    $('.modal').on('show.bs.modal', centerModal);
    $('.modal-popup .close-link').on('click', function(e) {
        e.preventDefault();
        $('.modal').modal('hide');
    });
    $(window).on('resize', function() {
        $('.modal:visible').each(centerModal);
    });

    if ($(window).width() < 991) {
        $("#filters_col .collapse").removeClass('in').addClass('out');
    } else {
        $("#filters_col .collapse").removeClass('out').addClass('in');
    }
    
    $('.tooltip-1').tooltip({html:true});
    
    $('.panel-group').on('hidden.bs.collapse shown.bs.collapse', function(e) {
        $(e.target).prev('.panel-heading').find("i.indicator").toggleClass('icon_plus_alt2 icon_minus_alt2');
    });
    
    $("#filter_buttons button").on('click', function() {
        $(this).toggleClass("active").siblings().removeClass("active");
    });

    $('.video').magnificPopup({type:'iframe'});
    $('.parallax-window').parallax({});
    $('.magnific-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {enabled: true}
    });

    $('.cmn-toggle-switch').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $(window).on('scroll', function() {
        $('#toTop').toggle($(this).scrollTop() != 0);
    });

    $('#toTop').on('click', function() {
        $('body,html').animate({scrollTop: 0}, 500);
    });

    $("#cat_nav li a").on('click', function() {
        $('#cat_nav li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.carousel_testimonials').owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        animateIn: 'flipInX',
        margin: 30,
        stagePadding: 30,
        smartSpeed: 450,
        responsiveClass: true,
        responsive: {
            600: { items: 1 },
            1000: { items: 1, nav: false }
        }
    });
});
