var express = require('express');
var app = express();

app.get('/', (req, res) => {
	res.send("Hello world from server.js");
});

app.listen(3000); //listen on default port 3000
console.log('Server running on port 3000');