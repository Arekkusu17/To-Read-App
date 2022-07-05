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

// Route for editing entry
router.get('/edit/:id',(req,res)=>{
	const id=req.params.id;
	connection.query('SELECT * FROM readinglist_db.books WHERE id=?',[id],(error,results)=>{
		if(error) {
			throw error
		}
		else{
			res.render('edit', { book: results[0] });
		}
	})
})

// Route for deleting entry
router.get('/delete/:id',(req,res)=>{
	const id=req.params.id;
	connection.query('DELETE FROM readinglist_db.books where id=?',[id],(error,results)=>{
		if(error) {
			throw error
		}
		else{
			//connection.query('ALTER TABLE readinglist_db.books where id=?')
			res.redirect('/');
		}
	})
})

//Route for saving the new data
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update',crud.update);

module.exports = router;
