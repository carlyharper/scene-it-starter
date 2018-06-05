$(document).ready(function () {
    function renderMovies(movieArray){
        var finalHTML = '';

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
    }

    //var testHTML = renderMovies(movieData);
    //$('.movies-cont').html(testHTML);

    //Set up click listener
    $('.movies-cont').on('click', '.button', function(){
        var imdbID = $(this).data('id');
        var movie = movieData.find(function(currentMovie){
            return currentMovie.imdbID == imdbID;
        });
        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);

        if (watchlist == null){
        watchlist = [];
        }
        watchlist.push(movie);
        
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    });
    
    $('form').on('submit', function(e){
     e.preventDefault();
     var searchString = $('.search-bar').val();
     var urlEncodedSearchString = encodeURIComponent(searchString);
     $.ajax({
         url: "http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString,
         method: "GET",
         success: function(response) {
             movieData = response.Search;
             var movieHTML = renderMovies(response.Search);
             $('.movies-cont').html(movieHTML);
         }
     })   
   });
});