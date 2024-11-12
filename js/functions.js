
// Adiciona a classe sticky ao header no scroll
$(window).on('scroll', function() {
    'use strict';
    $('header').toggleClass('sticky', $(this).scrollTop() > 1);
});

// Inicializa a galeria de imagens em modo de exibição com magnificPopup
$('.magnific-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true}
});

// Animação para rolar ao topo
$(window).on('scroll', function() {
    $('#toTop').toggle($(this).scrollTop() != 0);
});

$('#toTop').on('click', function() {
    $('body,html').animate({scrollTop: 0}, 300); // Reduz o tempo para rolar ao topo
});

// Inicializa o carrossel de depoimentos
$('.carousel_testimonials').owlCarousel({
    items: 1,
    loop: true,
    autoplay: false,
    animateIn: 'flipInX',
    margin: 30,
    stagePadding: 30,
    smartSpeed: 300, // Ajusta a velocidade do carrossel para transições mais rápidas
    responsiveClass: true,
    responsive: {
        600: { items: 1 },
        1000: { items: 1, nav: false }
    }
});
