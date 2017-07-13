let hangman = angular.module('hangman', []);
hangman.controller('HangManController', ($scope)=> {
	$scope.rounds = [
		{
			name: 'Round 1',
			win: 'Yes',
			lettersUsed: 'a,b,c,d,e,f,g'
		},
		{
			name: 'Round 2',
			win: 'No',
			lettersUsed: 's,a,l,a,m'
		},
		{
			name: 'Round 3',
			win: 'Yes',
			lettersUsed: 'z,q,w,e,d,s,a,g,d,r,h,j,k,l'
		},			
	];
});