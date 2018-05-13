// movie controller


app.controller('AddMovieController', ['CollectionService', '$http', function (CollectionService, $http) {
    console.log('AddMovieController LOADED');

    var self = this;

    self.genres = CollectionService.genres;
    self.collection = CollectionService.collection;

    self.newMovie = CollectionService.newMovie;
    self.deleteMovie = CollectionService.deleteMovie;

}]);