let hangman = angular.module('hangman', []);
hangman.controller('HangManController', ($scope, $http)=> {
	$http.get('/history').then((response) => {
		console.log('I got the data thanks: ', response);
		$scope.history = response.data;
	});

});