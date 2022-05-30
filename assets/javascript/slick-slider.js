$(document).ready(function(){
  
  $('.hero .slider__wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1500,
      autoplay: false,
      autoplaySpeed: 3000,
      infinite: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 553,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left slick-arrow' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right slick-arrow' aria-hidden='true'></i></button>"
  });

  $('.featured-products .slider__wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1500,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 553,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left slick-arrow' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right slick-arrow' aria-hidden='true'></i></button>"
});
  
});