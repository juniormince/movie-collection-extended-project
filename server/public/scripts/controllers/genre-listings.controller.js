// controller for GET movies by genre - move function to service later

app.controller('GenreController', ['$http', function ($http) {
    console.log('angular czeck');

    var self = this;

    self.genres = { list: [] };

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
                console.log('GET genres was NOT successful', error);
                alert('NOPE.');
            });
    }

    self.newGenre = function (newGenre) {
        console.log(newGenre);
        $http({
            method: 'POST',
            url: '/genres',
            data: newGenre
        })
            .then(function (response) {
                console.log('new genre POST was successful', response);
                //future note: angular material for submission confirmation?
            })
            .catch(function (error) {
                console.log('new genre POST was NOT successful', error);
            });
    };

    // Delete an existing ship, must have no crew!
    self.deleteGenre = function (genreId) {
        $http({
            method: 'DELETE',
            url: `/genres/${genreId}`
        }).then((response) => {
            self.getGenres();
            alert('Success!');
        }).catch((error) => {
            console.log('new genre DELETE was NOT successful', error);
            alert('NOPE check the server!');
        });
    }

    self.getGenres();

}]);