// controller for GET movies by genre - 
//future note!! genre-listings??? weird name, rename/cleanup later

app.controller('GenreController', ['CollectionService', '$mdDialog', function (CollectionService, $mdDialog) {
    console.log('GenreController LOADED');

    var self = this;

    self.genres = CollectionService.genres;

    self.newGenre = function (genre) {
        CollectionService.newGenre(genre);
    }

    self.deleteMovie = CollectionService.deleteMovie;
    self.deleteGenre = CollectionService.deleteGenre;

}]);