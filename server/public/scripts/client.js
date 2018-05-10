console.log('js czeck');

var app = angular.module('FilmCollectionApp', ['ngRoute']);

app.controller('TestController', ['$http', function ($http)  {
console.log('angular czeck');

var self = this;

self.message = 'moviessss';

}]);