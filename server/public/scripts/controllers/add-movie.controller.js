// movie controller


app.controller('AddMovieController', ['CollectionService', '$http', '$mdDialog', function (CollectionService, $http, $mdDialog) {
    console.log('AddMovieController LOADED');

    var self = this;

    self.genres = CollectionService.genres;
    self.collection = CollectionService.collection;

    self.getPoster = CollectionService.getPoster;
    self.deleteMovie = CollectionService.deleteMovie;

}]);