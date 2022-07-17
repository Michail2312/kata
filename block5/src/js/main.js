 const mySwiper = document.querySelector('.mySwiper');


  if (window.innerWidth < 520){
    new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView: 'auto',
    });
  }

 

