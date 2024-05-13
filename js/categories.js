document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/categories/apartment-house-design.json');
    let allCards = await response.json();
    let currentPage = 1;
    const cardsPerPage = 8;

    function renderCards(cards, rate) {
        let cardsHtml = '<div class="cards__wrapper">';
        for (let i = 0; i < cards.length && i < cardsPerPage * currentPage; i++) {
            const card = cards[i];
            cardsHtml +=
                `<div class="card__container container">
                    <div class="card__photo-container">
                        <img src="${card.imageUrl}" alt="job announcement" class="card__photo">
                    </div>
                    <div class="card__title-text-container">
                        <div class="card__title-container">
                            <h3>${card.title}</h3>
                        </div>
                        <div class="card__text-container">
                            <p><span class="underline">Ціна:</span> ${card.price} грн.</p>
                            <p><span class="underline">Населений пункт:</span> ${card.settlement}</p>
                            <p><span class="underline">Телефон:</span> ${card.phone}</p>
                        </div>
                    </div>
                </div>`;
        }
        cardsHtml += '</div>';
        document.querySelector('.apartment-house-design__list').innerHTML = cardsHtml;

        if (cards.length > cardsPerPage * currentPage) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Завантажити ще';
            loadMoreButton.classList.add('white-button');
            loadMoreButton.classList.add('load-button');
            loadMoreButton.addEventListener('click', loadMore);
            document.querySelector('.apartment-house-design__list').appendChild(loadMoreButton);
        } else {
            const loadMoreButton = document.querySelector('.apartment-house-design__list button');
            if (loadMoreButton) {
                loadMoreButton.remove();
            }
        }
    }

    function loadMore() {
        currentPage++;
        renderCards(allCards);
    }

    renderCards(allCards);
});

/* Home repair*/

document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/categories/home-repair.json');
    let allCards = await response.json();
    let currentPage = 1;
    const cardsPerPage = 8;

    function renderCards(cards, rate) {
        let cardsHtml = '<div class="cards__wrapper">';
        for (let i = 0; i < cards.length && i < cardsPerPage * currentPage; i++) {
            const card = cards[i];
            cardsHtml +=
                `<div class="card__container container">
                    <div class="card__photo-container">
                        <img src="${card.imageUrl}" alt="job announcement" class="card__photo">
                    </div>
                    <div class="card__title-text-container">
                        <div class="card__title-container">
                            <h3>${card.title}</h3>
                        </div>
                        <div class="card__text-container">
                            <p><span class="underline">Ціна:</span> ${card.price} грн.</p>
                            <p><span class="underline">Населений пункт:</span> ${card.settlement}</p>
                            <p><span class="underline">Телефон:</span> ${card.phone}</p>
                        </div>
                    </div>
                </div>`;
        }
        cardsHtml += '</div>';
        document.querySelector('.home-repair__list').innerHTML = cardsHtml;

        if (cards.length > cardsPerPage * currentPage) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Завантажити ще';
            loadMoreButton.classList.add('white-button');
            loadMoreButton.classList.add('load-button');
            loadMoreButton.addEventListener('click', loadMore);
            document.querySelector('.home-repair__list').appendChild(loadMoreButton);
        } else {
            const loadMoreButton = document.querySelector('.home-repair__list button');
            if (loadMoreButton) {
                loadMoreButton.remove();
            }
        }
    }

    function loadMore() {
        currentPage++;
        renderCards(allCards);
    }

    renderCards(allCards);
});


/* Devices repair */

document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/categories/devices-repair.json');
    let allCards = await response.json();
    let currentPage = 1;
    const cardsPerPage = 8;

    function renderCards(cards, rate) {
        let cardsHtml = '<div class="cards__wrapper">';
        for (let i = 0; i < cards.length && i < cardsPerPage * currentPage; i++) {
            const card = cards[i];
            cardsHtml +=
                `<div class="card__container container">
                    <div class="card__photo-container">
                        <img src="${card.imageUrl}" alt="job announcement" class="card__photo">
                    </div>
                    <div class="card__title-text-container">
                        <div class="card__title-container">
                            <h3>${card.title}</h3>
                        </div>
                        <div class="card__text-container">
                            <p><span class="underline">Ціна:</span> ${card.price} грн.</p>
                            <p><span class="underline">Населений пункт:</span> ${card.settlement}</p>
                            <p><span class="underline">Телефон:</span> ${card.phone}</p>
                        </div>
                    </div>
                </div>`;
        }
        cardsHtml += '</div>';
        document.querySelector('.devices-repair__list').innerHTML = cardsHtml;

        if (cards.length > cardsPerPage * currentPage) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Завантажити ще';
            loadMoreButton.classList.add('white-button');
            loadMoreButton.classList.add('load-button');
            loadMoreButton.addEventListener('click', loadMore);
            document.querySelector('.devices-repair__list').appendChild(loadMoreButton);
        } else {
            const loadMoreButton = document.querySelector('.devices-repair__list button');
            if (loadMoreButton) {
                loadMoreButton.remove();
            }
        }
    }

    function loadMore() {
        currentPage++;
        renderCards(allCards);
    }

    renderCards(allCards);
});

/* Cleaning */

document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/categories/cleaning.json');
    let allCards = await response.json();
    let currentPage = 1;
    const cardsPerPage = 8;

    function renderCards(cards, rate) {
        let cardsHtml = '<div class="cards__wrapper">';
        for (let i = 0; i < cards.length && i < cardsPerPage * currentPage; i++) {
            const card = cards[i];
            cardsHtml +=
                `<div class="card__container container">
                    <div class="card__photo-container">
                        <img src="${card.imageUrl}" alt="job announcement" class="card__photo">
                    </div>
                    <div class="card__title-text-container">
                        <div class="card__title-container">
                            <h3>${card.title}</h3>
                        </div>
                        <div class="card__text-container">
                            <p><span class="underline">Ціна:</span> ${card.price} грн.</p>
                            <p><span class="underline">Населений пункт:</span> ${card.settlement}</p>
                            <p><span class="underline">Телефон:</span> ${card.phone}</p>
                        </div>
                    </div>
                </div>`;
        }
        cardsHtml += '</div>';
        document.querySelector('.cleaning__list').innerHTML = cardsHtml;

        if (cards.length > cardsPerPage * currentPage) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Завантажити ще';
            loadMoreButton.classList.add('white-button');
            loadMoreButton.classList.add('load-button');
            loadMoreButton.addEventListener('click', loadMore);
            document.querySelector('.cleaning__list').appendChild(loadMoreButton);
        } else {
            const loadMoreButton = document.querySelector('.cleaning__list button');
            if (loadMoreButton) {
                loadMoreButton.remove();
            }
        }
    }

    function loadMore() {
        currentPage++;
        renderCards(allCards);
    }

    renderCards(allCards);
});

/* Moving */

document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/categories/moving.json');
    let allCards = await response.json();
    let currentPage = 1;
    const cardsPerPage = 8;

    function renderCards(cards, rate) {
        let cardsHtml = '<div class="cards__wrapper">';
        for (let i = 0; i < cards.length && i < cardsPerPage * currentPage; i++) {
            const card = cards[i];
            cardsHtml +=
                `<div class="card__container container">
                    <div class="card__photo-container">
                        <img src="${card.imageUrl}" alt="job announcement" class="card__photo">
                    </div>
                    <div class="card__title-text-container">
                        <div class="card__title-container">
                            <h3>${card.title}</h3>
                        </div>
                        <div class="card__text-container">
                            <p><span class="underline">Ціна:</span> ${card.price} грн.</p>
                            <p><span class="underline">Населений пункт:</span> ${card.settlement}</p>
                            <p><span class="underline">Телефон:</span> ${card.phone}</p>
                        </div>
                    </div>
                </div>`;
        }
        cardsHtml += '</div>';
        document.querySelector('.moving__list').innerHTML = cardsHtml;

        if (cards.length > cardsPerPage * currentPage) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Завантажити ще';
            loadMoreButton.classList.add('white-button');
            loadMoreButton.classList.add('load-button');
            loadMoreButton.addEventListener('click', loadMore);
            document.querySelector('.moving__list').appendChild(loadMoreButton);
        } else {
            const loadMoreButton = document.querySelector('.moving__list button');
            if (loadMoreButton) {
                loadMoreButton.remove();
            }
        }
    }

    function loadMore() {
        currentPage++;
        renderCards(allCards);
    }

    renderCards(allCards);
});

/* Woodworking */

document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/categories/woodworking.json');
    let allCards = await response.json();
    let currentPage = 1;
    const cardsPerPage = 8;

    function renderCards(cards, rate) {
        let cardsHtml = '<div class="cards__wrapper">';
        for (let i = 0; i < cards.length && i < cardsPerPage * currentPage; i++) {
            const card = cards[i];
            cardsHtml +=
                `<div class="card__container container">
                    <div class="card__photo-container">
                        <img src="${card.imageUrl}" alt="job announcement" class="card__photo">
                    </div>
                    <div class="card__title-text-container">
                        <div class="card__title-container">
                            <h3>${card.title}</h3>
                        </div>
                        <div class="card__text-container">
                            <p><span class="underline">Ціна:</span> ${card.price} грн.</p>
                            <p><span class="underline">Населений пункт:</span> ${card.settlement}</p>
                            <p><span class="underline">Телефон:</span> ${card.phone}</p>
                        </div>
                    </div>
                </div>`;
        }
        cardsHtml += '</div>';
        document.querySelector('.woodworking__list').innerHTML = cardsHtml;

        if (cards.length > cardsPerPage * currentPage) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Завантажити ще';
            loadMoreButton.classList.add('white-button');
            loadMoreButton.classList.add('load-button');
            loadMoreButton.addEventListener('click', loadMore);
            document.querySelector('.woodworking__list').appendChild(loadMoreButton);
        } else {
            const loadMoreButton = document.querySelector('.woodworking__list button');
            if (loadMoreButton) {
                loadMoreButton.remove();
            }
        }
    }

    function loadMore() {
        currentPage++;
        renderCards(allCards);
    }

    renderCards(allCards);
});

/* Gardening */

document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/categories/gardening.json');
    let allCards = await response.json();
    let currentPage = 1;
    const cardsPerPage = 8;

    function renderCards(cards, rate) {
        let cardsHtml = '<div class="cards__wrapper">';
        for (let i = 0; i < cards.length && i < cardsPerPage * currentPage; i++) {
            const card = cards[i];
            cardsHtml +=
                `<div class="card__container container">
                    <div class="card__photo-container">
                        <img src="${card.imageUrl}" alt="job announcement" class="card__photo">
                    </div>
                    <div class="card__title-text-container">
                        <div class="card__title-container">
                            <h3>${card.title}</h3>
                        </div>
                        <div class="card__text-container">
                            <p><span class="underline">Ціна:</span> ${card.price} грн.</p>
                            <p><span class="underline">Населений пункт:</span> ${card.settlement}</p>
                            <p><span class="underline">Телефон:</span> ${card.phone}</p>
                        </div>
                    </div>
                </div>`;
        }
        cardsHtml += '</div>';
        document.querySelector('.gardening__list').innerHTML = cardsHtml;

        if (cards.length > cardsPerPage * currentPage) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Завантажити ще';
            loadMoreButton.classList.add('white-button');
            loadMoreButton.classList.add('load-button');
            loadMoreButton.addEventListener('click', loadMore);
            document.querySelector('.gardening__list').appendChild(loadMoreButton);
        } else {
            const loadMoreButton = document.querySelector('.gardening__list button');
            if (loadMoreButton) {
                loadMoreButton.remove();
            }
        }
    }

    function loadMore() {
        currentPage++;
        renderCards(allCards);
    }

    renderCards(allCards);
});

/* Petcare */

document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/categories/petcare.json');
    let allCards = await response.json();
    let currentPage = 1;
    const cardsPerPage = 8;

    function renderCards(cards, rate) {
        let cardsHtml = '<div class="cards__wrapper">';
        for (let i = 0; i < cards.length && i < cardsPerPage * currentPage; i++) {
            const card = cards[i];
            cardsHtml +=
                `<div class="card__container container">
                    <div class="card__photo-container">
                        <img src="${card.imageUrl}" alt="job announcement" class="card__photo">
                    </div>
                    <div class="card__title-text-container">
                        <div class="card__title-container">
                            <h3>${card.title}</h3>
                        </div>
                        <div class="card__text-container">
                            <p><span class="underline">Ціна:</span> ${card.price} грн.</p>
                            <p><span class="underline">Населений пункт:</span> ${card.settlement}</p>
                            <p><span class="underline">Телефон:</span> ${card.phone}</p>
                        </div>
                    </div>
                </div>`;
        }
        cardsHtml += '</div>';
        document.querySelector('.petcare__list').innerHTML = cardsHtml;

        if (cards.length > cardsPerPage * currentPage) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Завантажити ще';
            loadMoreButton.classList.add('white-button');
            loadMoreButton.classList.add('load-button');
            loadMoreButton.addEventListener('click', loadMore);
            document.querySelector('.petcare__list').appendChild(loadMoreButton);
        } else {
            const loadMoreButton = document.querySelector('.petcare__list button');
            if (loadMoreButton) {
                loadMoreButton.remove();
            }
        }
    }

    function loadMore() {
        currentPage++;
        renderCards(allCards);
    }

    renderCards(allCards);
});

















/*document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/categories/apartment-house-design.json');
    const cards = await response.json();
    
    function renderCards(cards, rate) {
        let cardsHtml = '<div class="cards__wrapper">'; // відкриття контейнера за межами циклу
        for (const card of cards) {
            cardsHtml += 
            `<div class="card__container container">
                <div class="card__photo-container">
                    <img src="${card.imageUrl}" alt="job announcement" class="card__photo">
                </div>
                <div class="card__title-text-container">
                    <div class="card__title-container">
                        <h3>${card.title}</h3>
                    </div>
                    <div class="card__text-container">
                        <p>Ціна: ${card.price}</p>
                        <p>Населений пункт: ${card.settlement}</p>
                        <p>Телефон: ${card.phone}</p>
                    </div>
                </div>
            </div>`;
        }
        cardsHtml += '</div>'; // закриття контейнера за межами циклу
        document.querySelector('.card__list').innerHTML = cardsHtml;
    }

    renderCards(cards, 1);
});
*/