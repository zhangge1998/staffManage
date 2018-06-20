/**
 * Created by ubuntu on 17/08/17.
 */
var express = require("express");
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '115.159.110.11',
    user: 'zxw',
    password: 'wenwen',
    database: 'ThoughtWorks',
    port: '3306'
});
var app = express();

connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

connection.query('SELECT * from user', function(err, rows, fields) {
    connection.end();
    if (!err)
        console.log('查询结果: ', rows);
    else
        console.log('查询出错.');
});


app.listen(8080);