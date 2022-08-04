const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

generateJoke();

// BETTER WAY, USING async/await
async function generateJoke() {
     const config = {
          headers: {
               Accept: 'application/json'
          }
     }

     const res = await fetch('https://icanhazdadjoke.com', config)
     const data = await res.json()
     jokeEl.innerHTML = data.joke;


}


// ANOTHER WAY, USING .then() BUT SOOO MESSY!
// function generateJoke() {
//      const config = {
//           headers: {
//                Accept: 'application/json'
//           }
//      }
//
//      fetch('https://icanhazdadjoke.com', config)
//           .then((res) => res.json())
//           .then((data) => {
//                jokeEl.innerHTML = data.joke
//           })
//
// }