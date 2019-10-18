const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'db4free.net',
  user     : 'dbshop',
  password : 'Asdasd123123@',
  database : 'shop_trangsuc'
});

const app = express();

app.get('/loaiSP', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM loai_san_pham', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});


// Starting our server.
app.listen(3000, () => {

});
