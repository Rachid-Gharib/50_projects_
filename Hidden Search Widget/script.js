const search = document.querySelector('.search'); 
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

search.addEventListener('mouseenter', () => {
    search.classList.toggle('active');
    input.focus(); 
})

search.addEventListener('mouseleave', () => {
    search.classList.toggle('active');
    input.focus(); 
})

/*ORIGIN EVENT SPECIFICATIONS: 
btn.addEventListener('click', () => {
    search.classList.toggle('active');
    /input.focus();
})
*/
