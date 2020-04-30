let form = document.getElementById('form');


form.addEventListener('keyup', e => {
    e.preventDefault();
    let searchText = document.getElementById("search").value;
    getMovies(searchText);
});
function getMovies(searchText) {
    let imdbApiUrl =  ` http://www.omdbapi.com/?s=${searchText}&apikey=c45e67e8`;
 window.fetch(imdbApiUrl).then(data => {
     data.json().then(movies => {
        MoviesData = movies.Search;
        let output = "";
        for(let movie of MoviesData)
        {
    
            output += `
            <div class="card">
            <img src="${movie.Poster}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">
            <span class="badge badge-danger float-right">${movie.imdbID}<span>
            <span class="badge bade-primary">${movie.Year}</span>
            </p>
            <a href="#" class="btn btn-primary"> Go somewhere</a>
            </div>
            </div>
            `;
            document.getElementById("template").innerHTML = output;
        }
     })
     .catch(err => console.log(err));
 })
 .catch(err => console.log(err));
};


/*jQuery(document).ready(() => {
    jQuery("#form").on('submit', e => {
        e.preventDefault();
        let searchText = jQuery("#search").val();
        console.log(searchText);
    });
});*/