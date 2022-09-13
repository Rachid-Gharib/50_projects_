/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=dccf7a7c155d8dc654771d4d5d82b009';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=dccf7a7c155d8dc654771d4d5d82b009&query="';
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

function getClassByRate(rate) {
     if (rate >= 8) return 'green';
     if (rate >= 5) return 'orange';
     return 'red';
}

function showMovies(movies) {
     main.innerHTML = '';
     movies.forEach((movie) => {
          const { title, posterPath, voteAverage, overview } = movie;
          const movieElem = document.createElement('div');
          movieElem.classList.add('movie', 'flexBox');
          movieElem.innerHTML = `
                       <img src="${IMG_PATH + posterPath}" alt="Poster wallpaper">
                       <div class="movie-info">
                            <h3>${title}</h3>
                            <span class="${getClassByRate(voteAverage)}">${voteAverage}</span>
                       </div>
                       <div class="overview">
                            <h3>Overview</h3>
                            ${overview}
                       </div>
          `;
          main.appendChild(movieElem);
     });
}

async function getMovies(url) {
     const res = await fetch(url);
     const data = await res.json();
     showMovies(data.results);
}

// Get initial movies
getMovies(API_URL);

form.addEventListener('submit', (e) => {
     e.preventDefault();
     const queryString = search.value;
     if (queryString && queryString !== ' ') {
          getMovies(SEARCH_API + queryString);
          search.value = '';
     } else window.location.reload();
});
