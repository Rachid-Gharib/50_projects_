const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCUp();

smallCups.forEach((cup, idx) => {
     cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
     // if ((idx == smallCups.length - 1) && smallCups[idx - 1].classList.contains('full')) {
     //      smallCups[idx].classList.remove('full');
     //      return;
     // }
     if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
          --idx;
     }

     smallCups.forEach((cup, idx2) => {
          if (idx2 <= idx)
               cup.classList.add('full')
          else cup.classList.remove('full')
     })

     updateBigCUp();

}

function updateBigCUp() {
     const fullCups = document.querySelectorAll('.cup-small.full').length;
     const allCups = smallCups.length;

     if (fullCups === 0) {
          percentage.style.visibility = 'hidden';
          percentage.style.height = 0;
     } else {
          percentage.style.visibility = 'visible'
          percentage.style.height = `${fullCups / allCups * 330}px`;
          percentage.innerText = `${fullCups / allCups * 100}%`
     }

     if (fullCups === allCups){
          remained.style.visibility = 'hidden'
          remained.style.height = 0;
     }else {
          remained.style.visibility = 'visible'
          liters.innerText = `${2 - (250 * fullCups / 1000)}L`

     }
}
