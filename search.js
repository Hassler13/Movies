async function main() {
    const movies = await fetch("http://www.omdbapi.com/?apikey=485a4ccb&s=transformers ")
    const movieData = await movies.json();
    const movieCardEl = document.querySelector('.movie__grid--search');
    console.log(movieData)

    movieCardEl.innerHTML =  movieData.Search.map( (movie) => `<div class="movie-card">
            <div class="movie-poster">
                <img src="${movie.Poster}" alt="Movie poster placeholder" >
            </div>
            <div class="movie-info">
                <h3>${movie.Title}</h3>
                <p class="movie-year>${movie.Year}</p>
                <div class="movie-details">
                    <span>${movie.imdbID}</span>
                </div>
                <button class="details-button"> View Details </button>
            </div>
        </div>`
    )
        .join("");
     
}
main();

