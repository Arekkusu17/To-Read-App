const connection = require('../database/db');

exports.save = (req, res) => {
	const name = req.body.name;
	const author = req.body.author;
	const genre = req.body.genre;
	const status = req.body.status;

	connection.query(
		'INSERT INTO readinglist_db.books SET?',
		{
			name   : name,
			author : author,
			genre  : genre,
			status : status
		},
		(error, results) => {
			if (error) {
				throw error;
			} else {
				res.redirect('/');
			}
		}
	);
};

exports.update=(req, res) => {
	const id = req.body.id;
	const name = req.body.name;
	const author = req.body.author;
	const genre = req.body.genre;
	const status = req.body.status;

	connection.query(
		'UPDATE readinglist_db.books SET ? WHERE id =?',[
			{
				name   : name,
				author : author,
				genre  : genre,
				status : status		
				
			},id] ,
			(error, results) => {
			if (error) {
				throw error;
			} else {
				res.redirect('/');
			}
		}
	);
};