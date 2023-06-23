$(document).ready(function(){
  $('.SliderImage').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: true,
    // fade: true,
    // cssEase: 'linear',
    // infinite: true,
  });
});

$(document).ready(function(){
  $('.SliderPartner').slick({
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 500,
    prevArrow: false,
    nextArrow: false,
  });
});

$(document).ready(function(){
  $('.commentSlider').slick({
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: false,
    nextArrow: false,
    dots: true,
  });
});