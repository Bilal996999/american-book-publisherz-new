$('.logos-sliders').slick({
    dots: false,
    arrows:false,
    infinite: true,
    pauseOnFocus:false,
    pauseOnHover:false,
    speed: 7100,
    autoplay:true,
    autoplaySpeed: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:"290px",
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1398,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding:"190px",
        }
      },
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding:"130px",
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding:"90px",
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding:"60px",
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding:"40px",
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding:"20px",
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.showcase-slider').slick({
    dots: true,
    arrows:false,
    infinite: true,
    pauseOnFocus:false,
    pauseOnHover:false,
    speed: 6000,
    autoplay:true,
    autoplaySpeed: 0,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:"100px",
    cssEase:"linear",
    responsive: [
      {
        breakpoint: 1398,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerPadding:"190px",
        }
      },
      {
        breakpoint: 1198,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding:"130px",
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerPadding:"90px",
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding:"60px",
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding:"40px",
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding:"20px",
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.testimonial-slider').slick({
    dots: false,
    arrows:true,
    infinite: true,
    pauseOnFocus:false,
    pauseOnHover:false,
    speed: 1500,
    autoplay:false,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:'<img src="./assets/img/left-arrow.webp" type="button" class="slick-prev">Previous</button>',
    nextArrow:'<img src="./assets/img/right-arrow.webp" type="button" class="slick-next">Next</button>',
  });