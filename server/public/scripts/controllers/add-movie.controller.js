// add movie controller - move function to service later 


app.controller('AddMovieController', ['$http', function($http)     {
    console.log('angular czeck');

    var self = this;

self.newMovie = function (newMovie)    {
    console.log(newMovie);
    $http({
        method: 'POST',
        url: '/add-movie',
        data: newMovie
    })
    .then(function (response)   {
        console.log('new movie POST was successful', response);
        //future note: angular material for submission confirmation?
    })
    .catch(function (error) {
        console.log('new movie POST was NOT successful', error);
    });
};

}]);