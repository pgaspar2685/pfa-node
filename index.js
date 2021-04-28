const { response } = require('express')
const express = require('express')
const app = express()

var mysql = require('mysql');

var con = mysql.createConnection({
    host     : 'db',
    user     : 'pfa-user',
    password : 'pfa-root',
    database : 'pfa-db'
});

app.get('/', (req, res) => {
    res.send("PFA Docker!");

    con.connect(function(err) {
        if (err) throw err;
        
        res.send("Connect DB!!");

        let sql = "SELECT * FROM `fc-modules`";
        con.query(sql, function (err, result) {
            if (err) throw err;

            res.send("Result: " + result);
        });
    });

})

app.listen(3000, () => {
    console.log("Rodar na porta 3000");
})