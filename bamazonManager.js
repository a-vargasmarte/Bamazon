// * List a set of menu options:
// * View Products for Sale
// * View Low Inventory
// * Add to Inventory
// * Add New Product

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
    promptManager();
});

function runApp() {
    const answer = 'answer';
    switch (answer) {
        case 'Quit':
            cnn.end(() => { process.exit(); });
    }
}

function promptManager() {
    // prompt the manager with menu options
    inquirer.prompt(
        {
            name: "managerOptions",
            type: "rawlist",
            choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product'],
            message: "Manager Menu Options:"
        }
    ).then(function (answer) {
        // console.log(answer);

        switch (answer.managerOptions) {
            case 'View Products for Sale':
                cnn.query(`SELECT * FROM products`, function (err, res) {
                    if (err) throw err;
                    console.log('Here is our inventory.');
                    console.log("----------------------");
                    console.table(res);
                });
                break;
            case 'View Low Inventory':
                cnn.query(`SELECT * FROM products WHERE stock_quantity BETWEEN 0 AND 5`, function (err, res) {
                    if (err) {
                        console.log(err);
                        console.log('We have sufficient items in stock!');
                    }
                    console.table('\nWe have low availability of the following products:\n');
                    console.table(res);
                });
                break;
            case 'Add to Inventory':
                // select all products from products table
                cnn.query("SELECT * FROM products", function (err, res) {
                    if (err) throw err;
                    // once we have the items, prompt the user for which they'd like to purchase
                    inquirer
                        .prompt([
                            {
                                name: "addChoice",
                                type: "rawlist",
                                choices: function () {
                                    // declare an empty array of userChoices
                                    let userChoices = [];
                                    // for each response to our query
                                    for (let i = 0; i < res.length; i++) {
                                        userChoices.push(res[i].product_name);
                                    }
                                    return userChoices;
                                },
                                message: "Which product would you like to add more of?"
                            },
                            {
                                name: "quantity",
                                type: "input",
                                message: "How many would you like to add?"
                            }
                        ])
                        .then(function (answer) {
                            // console.log(answer);
                            let chosenItem;
                            res.forEach(product => {
                                // if the manager's product choice matches the product name...
                                if (answer.addChoice === product.product_name) {
                                    chosenItem = product;
                                }
                            });
                            // update items in the product table of the bamazon db to reflect additions to products
                            cnn.query(
                                "UPDATE products SET ? WHERE ?",
                                [
                                    {
                                        stock_quantity: chosenItem.stock_quantity + parseInt(answer.quantity)

                                    },
                                    {
                                        item_id: chosenItem.item_id
                                    }
                                ],
                                function (error) {
                                    if (error) throw error;
                                    console.log('\nSuccesfully added ' + answer.quantity + ' ' + chosenItem.product_name + '\n');
                                    console.log('\nCurrent product information for ' + chosenItem.product_name + '\n');
                                    console.table(chosenItem);
                                }
                            )
                        });
                });
                break;
            case 'Add New Product':
                addProduct();

                break;
        }
    })
}

function addProduct() {
    let nameQuery;
    let departmentQuery;
    let priceQuery;
    let quantityQuery;

    inquireProduct();

}

function inquireProduct() {
    inquirer.prompt(
        {
            name: 'productName',
            type: 'input',
            message: `\nPlease type product name to add.\n`
        }).then(function (answer) {
            // grab the user input
            nameQuery = answer.productName;
            console.log(nameQuery);
            // query the connection to insert the product
            // cnn.query()

            inquireDepartment();
        });
}

function inquireDepartment() {
    inquirer.prompt(
        {
            name: 'productDepartment',
            type: 'input',
            message: `\nPlease type product department.\n`
        }).then(function (answer) {
            // grab the user input
            departmentQuery = answer.productDepartment;
            // console.log(departmentQuery);
            inquirePrice();
        });
}

function inquirePrice() {
    inquirer.prompt(
        {
            name: 'productPrice',
            type: 'input',
            message: `\nPlease type product price.\n`
        }).then(function (answer) {
            // grab the user input
            priceQuery = parseInt(answer.productPrice);
            console.log(priceQuery);
            // query the connection to insert the product
            // cnn.query()
            inquireStock();
        });
}

function inquireStock() {
    inquirer.prompt(
        {
            name: 'productStock',
            type: 'input',
            message: `\nPlease type quantity to add.\n`
        }).then(function (answer) {
            // grab the user input
            quantityQuery = parseInt(answer.productStock);
            // console.log(priceQuery);
            // console.log(nameQuery + '|' + departmentQuery + '|' + priceQuery + '|' + quantityQuery);
            // query the connection to insert the product
            // cnn.query()
            insertQuery();
        });
}

function insertQuery() {
    let query = "INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES (" + "'" + nameQuery + "'" + " , " + "'" + departmentQuery + "'" + " , " + priceQuery + " , " + quantityQuery + ")";
    // console.log(query);
    cnn.query(query, function (err, res) {
        if (err) throw err;
        console.log(`\nSuccesfully added ${quantityQuery} ${nameQuery} to inventory!\n`);
        console.log("----------------------");
        // console.table(res);
    });
}
