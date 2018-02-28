// require inquirer and mysql node packages
const inquirer = require('inquirer');
const mysql = require('mysql');

// establish connection with bamazon db
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "8ZZ,R!*2y5S{hCZ5",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err, res) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log(res);
    // createChoices();
    // start();
    // connection.end();
});

