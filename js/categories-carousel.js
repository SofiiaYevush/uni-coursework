const slides = [
    '<div><img src="/img/categories-carousel/cleaning-category.jpg" id="carousel-img-cleaning" alt="Cleaning"><p>Клінінг</p></div>',
    '<div><img src="/img/categories-carousel/moving-category.jpg" id="carousel-img-moving" alt="Moving"><p>Перевезення</p></div>',
    '<div><img src="/img/categories-carousel/repair-house-category.jpg" id="carousel-img-repair-house" alt="House repair"><p>Ремонт будинку</p></div>',
    '<div><img src="/img/categories-carousel/woodworking-category.jpg" id="carousel-img-woodworking" alt="Woodworking"><p>Роботи з деревом</p></div>',
    '<div><img src="/img/categories-carousel/repair-of-devices-category.jpg" id="carousel-img-repair-of-devices" alt="Repair of devices"><p>Ремонт техніки</p></div>'
];

let currentSlide = 0;

const slideContainer = document.querySelector('.categories__carousel-slide');

function renderSlide() {
    slideContainer.innerHTML = slides[currentSlide];
    if (window.matchMedia('(min-width: 768px)').matches) {
        const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
        if (window.matchMedia('(min-width: 1024px)').matches) {
            const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
            slideContainer.innerHTML += slides[thirdSlide];
        }
    }
    renderIndicators();
}

function nextSlide() {
    currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    renderSlide();
}

// setInterval(nextSlide, 3000);

renderSlide();

const nextButton = document.querySelector('.categories__carousel-btn-next');
nextButton.addEventListener('click', nextSlide);

// Зробити щоб працювала кнопка назад
function prevSlide() {
    currentSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
}

const prevButton = document.querySelector('.categories__carousel-btn-prev');
prevButton.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);

function renderIndicators() {
    const indicatorsContainer = document.querySelector('.categories__carousel-indicators');
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
        indicatorsContainer.innerHTML += `<button class="categories__carousel-indicator ${i === currentSlide ? 'categories__carousel-indicator--active' : ''}"></button>`;
    }
    const indicators = document.querySelectorAll('.categories__carousel-indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            renderSlide();
            renderIndicators(slides, currentSlide);
        });
    });
}

renderIndicators();