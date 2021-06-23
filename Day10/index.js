const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3752991988575cff09da660307caa99&page=1";
const IMG_URL = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=a3752991988575cff09da660307caa99&query="';


//dom elements
const form = document.getElementById("form");
const search = document.getElementById("search");
const main=document.getElementById("main");

form.addEventListener("submit", e => {
    //prevent the form from submitting
    e.preventDefault();

    const searchTerm = search.value;
    if (searchTerm && searchTerm != '') {
        getMovies(SEARCH_URL + searchTerm);
        search.value = '';
    }
    else {
        window.location.reload();
    }
})

getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    showMovies(data.results);
}

//adding data to the DOM
function showMovies(movies) {
    main.innerHTML = '';
    console.log(movies);
    movies.forEach(movie => {
        const { title, overview, poster_path,vote_average } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMG_URL+poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class=${getClassByRating(vote_average)}>${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>
            `;
        //console.log(movieEl);
        main.appendChild(movieEl);
    })
}

function getClassByRating(vote) {
    if (vote >= 8)
        return "green";
    else if (vote >= 5)
        return "orange";
    else
        return "red";
}
