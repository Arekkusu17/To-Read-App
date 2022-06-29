const express = require('express');
const router = express.Router();

const connection = require('./database/db');

router.get('/contacto', (req, res) => {
	connection.query('SELECT * FROM readinglist_db.users', (error, results) => {
		if (error) {
			throw error;
		} else {
			res.send(results);
		}
	});
});

module.exports = router;
