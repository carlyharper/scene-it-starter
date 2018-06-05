$(function(){

    var savedMoviesJSON = localStorage.getItem('watchlist');
    var savedMovies = JSON.parse(savedMoviesJSON);

    function renderMovies(movieArray){
        var finalHTML = "";

        movieArray.forEach(function(currentMovie){
            finalHTML += '<div class="movie card border-primary">';
            finalHTML += '<img class="card-img-top" alt="Card image cap" src='+currentMovie.Poster+'>';
            finalHTML += '<div class="card-body">';
            finalHTML += '<h5 class="title card-title">'+currentMovie.Title+'</h5>';
            finalHTML += '<h6 class="card-substitute release">'+currentMovie.Year+'</h5>';
            finalHTML += '</div>';
            finalHTML += '<div class="button card-footer text-center">';
            finalHTML += '<a href="#" data-id="' + currentMovie.imdbID +'"class="btn btn-primary addMovie">Add</a>';
            finalHTML += '</div>';
            finalHTML += '</div>';
        });
        return finalHTML;
    };

    testHTML = renderMovies(savedMovies);
    $('.movies-cont').html(testHTML);
});

//     $("form").submit(function(e){
//         e.preventDefault();
//         var renderedHTML = renderMovies(savedMovies);
//         $('.movies-cont').html(renderedHTML);
//     });
// });
