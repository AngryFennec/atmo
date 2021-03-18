if ($('.profile-testimonials__swiper')[0]) {
  const promoCertSlider = new Swiper('.profile-testimonials__swiper', {
    slidesPerView: 2,
    effect: 'fade',
    loop: true,
    navigation: {
      nextEl: '.profile-testimonials__next',
      prevEl: '.profile-testimonials__prev',
    },
  });
}
