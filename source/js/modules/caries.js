if ($('.caries-ba__swiper')[0]) {
  const cariesBa = new Swiper('.caries-ba__swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    navigation: {
      nextEl: '.caries-ba__next',
      prevEl: '.caries-ba__prev',
    },
    pagination: {
      el: '.caries-ba__pagination',
    },
    320: {
      spaceBetween: 10,
    },
    1024: {
      spaceBetween: 10,
    },
    5000: {
      spaceBetween: 30,
    },
  });
}
