const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
     counter.innerText = '0';

     const updateCounter = () => {
          // To convert the string into an numeric value we could do one of the following:
          // const target = Number(counter.getAttribute('data-target'))       // with the constructor
          // const target = parseInt(counter.getAttribute('data-target'));    // with the function parseInt()
          const target = +counter.getAttribute('data-target');                // with a plus (+) operator      *implicit convervion to a premitive type*

          const c = +counter.innerText;
          const increment = target / 200;
          console.log(increment);

          if (c < target) {
               counter.innerText = `${Math.ceil(c + increment)}`;
               setTimeout(updateCounter, 1);
          } else counter.innerText = target;
     }
     updateCounter();

})


