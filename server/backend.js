const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'password',
    database : 'spldb'
});

app.listen(3001, function(){ 
    console.log('this is port 3001'); 
});

app.get('/', function(req, res){
    res.send('this will be the server, Insha Allah :)');
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended : true}));

app.post('/api/signup', (req, res) => {
    const email = req.body.email;
    const uid = 
    const queryInsert = "INSERT INTO spldb.children (uid, email) VALUES (?)";
    db.query(queryInsert, [uid, email], (err, result) => {
        console.log(result);
    });
});

// db.connect( (err) => {
//     if(err) throw err;
//     else {
//         const queryInsert = "INSERT INTO spldb.children (name, email, password, current_point) VALUES ('cris', 'jhgfds', 'lpmnb', 7753)";
//         db.query(queryInsert, (err, result) => {
//         console.log(result);
//         console.log('one row inserted');
//         });
//     }
// });
