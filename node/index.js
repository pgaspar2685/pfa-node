const { response } = require('express')
const express = require('express')
const app = express()

var mysql = require('mysql');

var con = mysql.createConnection({
    host     : 'pfa-mysql',
    user     : 'root',
    password : 'root',
    database : 'pfa-db'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connect DB!!");
});

app.get('/', (req, res) => {
    
    let sql = "SELECT * FROM `fc-modules`";
    con.query(sql, function (err, results) {
        if (err) throw err;

        //console.log(results)
        let html = '';
        results.forEach(data => {
            html += data.id + " - " + data.name + "<br>";
        });

        res.send("PFA Docker!<br>" + html);
    });
})

app.listen(3000, () => {
    console.log("Rodar na porta 3000");
})