$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'linear',
        infinite: true,
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: false,
    })
})