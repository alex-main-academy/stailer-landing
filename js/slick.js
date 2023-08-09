$(document).ready(function () {
  $(".slider").slick({
    prevArrow: false,
    nextArrow: false,
    dots: true,
    customPaging: function (slider, i) {
      return '<span class="custom-dot"></span>';
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".nozzles__slider").slick({
    prevArrow:
      '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/section/nozzles/prev-slide.svg" alt="" width="17" height="31"></button>',
    nextArrow:
      '<button class="slick-next" aria-label="Previous" type="button"><img src="img/section/nozzles/next-slide.svg" alt="" width="17" height="31"></button>',
    slidesToShow: 1,
    variableWidth: true,
  });
});
