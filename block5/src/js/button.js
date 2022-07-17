let btn = document.querySelector('.show-more');
let swiperWrapper = document.querySelector('.swiper-wrapper');
btn.addEventListener('click', (evt) => {
    console.log(btn.style.content);
    if(evt && (window.innerWidth > 520)){
        if(!btn.classList.toggle('hidden')){
            swiperWrapper.style.height = '130' + 'px';
            btn.innerText = btn.value;
            
        }
        else {
            swiperWrapper.style.height = '100' + '%';
            btn.innerText = 'Скрыть';
        }
    }
});