const slides = document.querySelectorAll('.slide'); 
const h3s = document.querySelectorAll('h3'); 

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        removeActiveClass();
        slide.classList.add('active');  
        h3s.forEach(h3 => {
            h3.classList.add('fadeOut'); 
        })
    })
    
})

function removeActiveClass() {
    slides.forEach(slide => {
        slide.classList.remove('active'); 
        h3s.forEach(h3 => {
            h3.classList.remove('fadeOut'); 
        })
    })
    
}