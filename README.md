# To Read App

## Project Dependencies
* dotenv
* express
* ejs
* mysql
* nodemon
    
```
npm i dotenv express ejs  mysql nodemon
```

## Configure the database in a .env file
Example:

```
PORT=5000
MYSQLUSER=devuser
MYSQLHOST=localhost
MYSQLPASSWORD=
MYSQLDATABASE=readinglist_db
MYSQLPORT=3306
```

## Running the app

I usually did it with *nodemon* to see the changes between saves, but you can do:
```
node app.js
```
# Screenshots

###  Index

![Index view](/screenshots/index.png "Index view of the app")

###  Create

![Create view](/screenshots/create.png "Create view of the app")

###  Edit  

![Edit view](/screenshots/edit.png "Edit view of the app")

