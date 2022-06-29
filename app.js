const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use('/', require('./router'));

app.listen(5000, (req, res) => {
	console.log('Server running on http://localhost:5000');
});
