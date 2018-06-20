/**
 * Created by ubuntu on 17/08/17.
 */
var express=require('express');
var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : '115.159.110.11',
    user     : 'zxw',
    password : 'wenwen',
    port: '3306',
    database: 'ThoughtWorks',
});
var app=express();
connection.connect();

var  addSql = 'INSERT INTO user(user_name,user_password,user_tel) VALUES(?,?,?)';
var  addSqlParams = ['lmy', 'lmy','10987234892'];
connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();

app.listen(8080);