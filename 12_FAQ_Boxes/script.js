
const btns = document.querySelectorAll('.faq-toggle'); // querySelectorAll returns a Collection that is static!!
//FOR..EACH LOOP IS USED WHEN WE ONLY ITERATE OVER AN ARRAY!! AND it works well with the collection that is returned by .querySelectorAll !!!
btns.forEach(btn => {
     btn.addEventListener('click', () => {
          btn.parentNode.classList.toggle('active')
     })
});


//THIS FOR..OF works for both querySelectorAll AND getElementsByClassName collections
// for (let btn of btns){
//      btn.addEventListener('click', () => {
//           btn.parentNode.classList.toggle('active')
//      })
// }


// const btns = document.getElementsByClassName('faq-toggle');  getElementsByClassName returns a Collection that is live !!
//the collection btns that is returned by getElementsByClassName only accepts the traditional for loop!!!!
// for (let  i = 0; i < btns.length; i++) {
//      btns[i].addEventListener('click', () => {
//           btns[i].parentNode.classList.toggle('active')
//      })
//
// }