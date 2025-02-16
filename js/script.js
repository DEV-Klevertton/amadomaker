$('.slider').slick({
  autoplay: false,
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: false,
  prevArrow: $('.slick-prev'), // Define a seta de voltar
  nextArrow: $('.slick-next'),
  responsive: [
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1
        }
    }
]
});
