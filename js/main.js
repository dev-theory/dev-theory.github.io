$(document).ready(function() {
  $('.clients-slider').slick({
    arrows: true,
    autoplay: true,
    easing: 'ease-out',
    speed: 800,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 750,
      settings: {
        slidesToShow: 1
      }
    }]
  })
})
