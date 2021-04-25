const { response } = require('express')
const express = require('express')
const app = express()

/*
var mysql = require('mysql');

var con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'mydb'
});
*/

app.get('/', (req, res) => {
    res.send("PFA Docker!");
})

/*
app.get('/', (req, res) => {

    con.connect(function(err) {
        if (err) throw err;
        
        con.query(sql, function (err, result) {
            if (err) throw err;

            res.send("Result: " + result);
        });
    });

    res.send("PFA Docker!");

    connection.end();
})
*/
