// * View Product Sales by Department
// * Create New Department

// require relevant npm packages

// require inquirer and mysql node packages
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

// establish connection with bamazon db
const cnn = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "8ZZ,R!*2y5S{hCZ5",
    database: "bamazon"
});

// connect to the mysql server and sql database
cnn.connect(err => {
    if (err) throw err;

    runApp();
    promptSupervisor();
});

function runApp() {
    const answer = 'answer';
    switch (answer) {
        case 'Quit':
            cnn.end(() => { process.exit(); });
    }
}

function promptSupervisor() {
    // prompt the supervisor with menu options
    inquirer.prompt(
        {
            name: "supervisorOptions",
            type: "rawlist",
            choices: ['View Product Sales by Department', 'Create New Department'],
            message: "Supervisor Menu Options:"
        }
    ).then(function (answer) {
        // console.table(answer);
        switch (answer.supervisorOptions) {
            case 'View Product Sales by Department':
                cnn.query("SELECT departments.department_id, departments.department_name, departments.over_head_costs, SUM(products.product_sales) AS Total_Sales FROM departments INNER JOIN products ON departments.department_name=products.department_name GROUP BY departments.department_name", function (err, res) {
                    if (err) throw err;
                    // console.log(res);
                    // we add a new property to each of our res objects to calculate total_profit by department
                    res.forEach(row => {
                        // calculate profit
                        row.total_profit = row.Total_Sales - row.over_head_costs;
                    });
                    console.table(res);
                });
            case 'Create New Department':
                // inquirer.prompt(
                //     {
                //         name: "addDepartment",
                //         type: 'input',
                //         message: "Name department to add"
                //     }
                // ).then(function (answer) {

                // });
                createDepartment();

        }

    })
}

function createDepartment() {
    let departmentQuery;
    let overheadQuery;
    promptDepartment();
}

function promptDepartment() {
    inquirer.prompt(
        {
            name: "addDepartment",
            type: 'input',
            message: "Name department to add"
        }
    ).then(function (answer) {
        departmentQuery = answer.addDepartment;
        // console.log(departmentQuery);
        promptOverHead();
    });
}

function promptOverHead() {
    inquirer.prompt(
        {
            name: "addOverHead",
            type: 'input',
            message: `What are the overhead costs for this department?`
        }
    ).then(function (answer) {
        overheadQuery = parseInt(answer.addOverHead);
        insertQuery();
        // console.log(answer);

    })
}

function insertQuery() {
    let query = "INSERT INTO departments (department_name, over_head_costs) VALUES (" + "'" + departmentQuery + "'" + " , " + overheadQuery + ")";
    cnn.query(query, function (err, res) {
        if (err) throw err;
        console.log(`\n Successfully added the ${departmentQuery} department!`);
        console.log(`\n Check out this updated table!\n`);
        console.log(`----------------------------------`);
    });
    cnn.query("SELECT * FROM departments", function (err, res) {
        if (err) throw err;
        // console.log(`\n Successfully added the ${departmentQuery} department!`);
        console.table(res);
    });
}