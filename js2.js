const carouselSlides = document.querySelectorAll('.carousel-slide');
let currentSlideIndex = 0;

function showSlide(index) {
    carouselSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= carouselSlides.length) {
        currentSlideIndex = 0;
    }
    showSlide(currentSlideIndex);
}

setInterval(nextSlide, 3000); // 每3秒切换一次图片，可根据需求调整时间间隔