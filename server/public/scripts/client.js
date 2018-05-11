console.log('js czeck');

var app = angular.module('FilmCollectionApp', ['ngRoute']);

// successful test. delete later
// app.controller('TestController', ['$http', function ($http)  {
// console.log('angular czeck');
// var self = this;

// self.message = 'moviessss';
// }]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        //future home page??
        //.when('/home', {
        //    template: '<h1 id="welcome">welcome tO ONLINE MOVIE HOARDING</h1>'
        //})
        .when('/', {
            templateUrl: 'views/new-movie.html',
            controller: 'AddMovieController as vm'
        })
        // .when('/genres', {
        //     templateUrl: 'views/genres.html',
        //     controller: 'GenreController as vm'
        // })
        .otherwise({
            template: '<h1>SORRY 404</h1>'
        });
}]);