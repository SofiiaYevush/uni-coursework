document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('/api/testimonials-client.json');
    const testimonials = await response.json();
    
    function renderTestimonials(testimonials, rate) {
        let testimonialsHtml = '';
        for (const testimonial of testimonials) {
            testimonialsHtml += 
            `<div class="testimonials__container">
                <div class="testimonials__photo-container">
                    <img src="${testimonial.imageUrl}" alt="${testimonial.name}" class="testimonials__photo">
                </div>
                <div class="testimonials__name-text-container">
                    <div class="testimonials__name-container">
                        <h3 class="testimonials__name">${testimonial.name}</h3>
                    </div>
                    <div class="testimonials__text-container">
                        <p class="testimonials__text">${testimonial.text}</p>
                    </div>
                </div>
            </div>`;
        }
        document.querySelector('.home-client__testimonials-list').innerHTML = testimonialsHtml;
    }

    renderTestimonials(testimonials, 1);
});
