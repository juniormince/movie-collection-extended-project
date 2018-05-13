//welcome to movie collections SERVICE how may we help you today

app.service('CollectionService', ['$http', function ($http) {
    console.log('CollectionService LOADED');

    var self = this;

    //movie list with genres
    self.collection = { list: [] };
    self.genres = { list: [] };

    //ADD movie
    self.newMovie = function (newMovie) {
        console.log(newMovie);
        $http({
            method: 'POST',
            url: '/movies',
            data: newMovie
        })
            .then(function (response) {
                console.log('new movie POST was successful', response);
                self.getMovies();
                //future note: angular material for submission confirmation?
            })
            .catch(function (error) {
                console.log('new movie POST was NOT successful', error);
            });
    };

    //GET movies
    self.getMovies = function () {
        $http({
            method: 'GET',
            url: '/movies',
        }).then((response) => {
            console.log('response', response);
            self.collection.list = response.data;
        })
            .catch((error) => {
                console.log('GET movies was NOT successful', error);
                alert('NOPE.');
            });
    }

     //DELETE movie
     self.deleteMovie = function (movieId) {
        $http({
            method: 'DELETE',
            url: `/movies/${movieId}`,
        }).then((response) => {
            self.getMovies();
            self.getGenres();
        })
            .catch((error) => {
                console.log('DELETE movies was NOT successful', error);
                alert('NOPE.');
            });
    }

    //GET genres
    self.getGenres = function () {
        $http({
            method: 'GET',
            url: '/genres',
        }).then((response) => {
            console.log('response', response);
            self.genres.list = response.data;
        })
            .catch((error) => {
                console.log('GET genres was NOT successful', error);
                alert('NOPE.');
            });
    }

    //ADD genre
    self.newGenre = function (newGenre) {
        console.log(newGenre);
        $http({
            method: 'POST',
            url: '/genres',
            data: newGenre
        })
            .then(function (response) {
                console.log('new genre POST was successful', response);
                self.getGenres();
                //future note: angular material for submission confirmation?
            })
            .catch(function (error) {
                console.log('new genre POST was NOT successful', error);
            });
    };

    //DELETE genre
    self.deleteGenre = function (genre) {
        if (genre.all_films > 0) {
            alert('hey! there are movies in there!');
        } else {
            $http({
                method: 'DELETE',
                url: `/genres/${genre.id}`
            }).then((response) => {
                self.getGenres();
                alert('Success!');
            }).catch((error) => {
                console.log('new genre DELETE was NOT successful', error);
                alert('NOPE.');
            });
        }
    }

    //load em up
    self.getGenres();
    self.getMovies();

}]);