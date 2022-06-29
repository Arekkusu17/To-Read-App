const mysql = require('mysql');
require('dotenv').config({ path: './.env' });

const connection = mysql.createConnection({
	host     : process.env.MYSQLHOST,
	user     : process.env.MYSQLUSER,
	password : process.env.MYSQLPASSWORD,
	database : process.env.MYSQLDATABASE
});

connection.connect((error) => {
	if (error) {
		console.log('Connection error to the database: ' + error);
		return;
	}
	console.log('Connected to the MySQL DB !');
});

module.exports = connection;
