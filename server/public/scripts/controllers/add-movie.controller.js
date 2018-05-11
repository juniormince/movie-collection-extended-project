// add movie controller - move function to service later 


app.controller('AddMovieController', ['$http', function ($http) {
    console.log('angular czeck');

    var self = this;
    //movie list
    self.collection = { list: [] };
    //genre list
    self.genres = { list: '' };

    //add a new movie
    self.newMovie = function (newMovie) {
        console.log(newMovie);
        $http({
            method: 'POST',
            url: '/movies',
            data: newMovie
        })
            .then(function (response) {
                console.log('new movie POST was successful', response);
                //future note: angular material for submission confirmation?
            })
            .catch(function (error) {
                console.log('new movie POST was NOT successful', error);
            });
    };

    //testing GET movies function here. will move to service
    self.getMovies = function () {
        $http({
            method: 'GET',
            url: '/movies',
        }).then((response) => {
            console.log('response', response);
            self.movies.list = response.data;
        })
            .catch((error) => {
                console.log('error making rent get request', error);
                alert('Something went wrong! Check the server.');
            });
    }

    //TESTING. MOVE LATER. for GET genres
    self.getGenres = function () {
        $http({
            method: 'GET',
            url: '/genres',
        }).then((response) => {
            console.log('response', response);
            self.genres.list = response.data;
        })
            .catch((error) => {
                console.log('error making rent get request', error);
                alert('Something went wrong! Check the server.');
            });
    }

    self.getGenres();

}]);