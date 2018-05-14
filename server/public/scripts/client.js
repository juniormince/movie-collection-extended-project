//hello operator how may i direct your call??

console.log('js czeck');

var app = angular.module('FilmCollectionApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        //future home page??
        .when('/', {
           template: '<h1 id="welcome">welcome tO ONLINE MOVIE HOARDING</h1>'
        })
        .when('/movies', {
            templateUrl: 'views/movie.html',
            controller: 'AddMovieController as vm'
        })
        .when('/genres', {
            templateUrl: 'views/genre.html',
            controller: 'GenreController as vm'
        })
        .otherwise({
            template: '<h1 class="error">SORRY 404</h1>'
        });
}]);