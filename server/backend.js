const express = require('express');
const app = express();
const mysql = require('mysql');
const db = mysql.createConnection({
    host = 'localhost',
    user = 'root',
    password = 'password',
    database = 'spldb'
});

app.listen(3001, function(){ 
    console.log('this is port 3001'); 
});

app.get('/', function(req, res){
    res.send('this will be the server, Insha Allah :)');
    
});