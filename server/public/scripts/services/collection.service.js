//welcome to movie collections SERVICE how may we help you today

app.service('CollectionService', ['$http', '$mdDialog', function ($http, $mdDialog) {
    console.log('CollectionService LOADED');

    var self = this;

    //movie list with genres
    self.collection = { list: [] };
    self.genres = { list: [] };
    self.poster = '';

    //get. that. poster!!
    self.getPoster = function (newMovie) {
        var baseUrl = 'https://image.tmdb.org/t/p/w500';
        $http({
            method: 'GET',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: process.env.API_KEY,
                query: newMovie.name,
            }

        })
            .then(function (response) {
                console.log('post POST was successful', response.data.results[0].poster_path);
                self.poster = baseUrl + response.data.results[0].poster_path;
                console.log(self.poster);
                newMovie.image_path = self.poster;
                console.log(newMovie.image_path);
                self.newMovie(newMovie);
                console.log(newMovie);
                //future note: angular material for submission confirmation?
            })
            .catch(function (error) {
                console.log('new movie POST was NOT successful', error);
            });
    };


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
            //material fun~~~~
            // self.confirmBox();
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

    //material fun~~~~
    // self.confirmBox = function () {
    //     $mdDialog.show(
    //         $mdDialog.alert()
    //             .clickOutsideToClose(true)
    //             .title('Pew pew ship destroyed')
    //             .textContent('Closing to the right!')
    //             // .ariaLabel('Left to right demo')
    //             .ok('Nice!')
    //             // You can specify either sting with query selector
    //             .openFrom('#left')
    //             // or an element
    //             .closeTo(angular.element(document.querySelector('#right')))
    //     );
    // };


    //load em up
    self.getGenres();
    self.getMovies();

}]);