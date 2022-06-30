const express = require('express');
const router = express.Router();

const connection = require('./database/db');

//Index Page with all the data
router.get('/', (req, res) => {
	connection.query('SELECT * FROM readinglist_db.books', (error, results) => {
		if (error) {
			throw error;
		} else {
			//res.send(results);
			res.render('index', { results: results });
		}
	});
});

// Route for new data entry
router.get('/create', (req, res) => {
	res.render('create');
});

//Route for saving the new data
const crud = require('./controllers/crud');
router.post('/save', crud.save);

module.exports = router;
