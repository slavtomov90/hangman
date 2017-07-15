const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/history', (req, res) => {
	console.log('I received a get request. Sending you the contactlist now');

	let history = [
		{
			name: 'Num: 1',
			win: 'Yes',
			lettersUsed: 'a,b,c,d,e,f,g'
		},
		{
			name: 'Num: 2',
			win: 'No',
			lettersUsed: 's,l,l,t,m'
		},
		{
			name: 'Num: 3',
			win: 'Yes',
			lettersUsed: 'z,q,w,e,d,s,a,g,d,r,h,j,k,l'
		}	
	]	

	res.json(history);
});

app.listen(3000); //listen on default port 3000
console.log('Server running on port 3000');