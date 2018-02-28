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
    // console.log(res);
    // createChoices();
    start();
    // connection.end();
});

// function which prompts the user for the id of the produc they would like to buy
// and how many units of the product they would like to buy
function start() {
    // select all products from products table
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // once we have the items, prompt the user for which they'd like to purchase
        inquirer
            .prompt([
                {
                    name: "choice",
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
                    message: "Which product would you like to buy?"
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to buy?"
                }
            ])
            .then(function (answer) {
                // console.log("this worked, stupid!");
                // get info from chosen item
                let chosenItem;
                res.forEach(product => {
                    // if the user's answer is less than the stock inventory...
                    if (answer.choice === product.product_name) {
                        chosenItem = product;
                    }
                });
                // console.log(chosenItem);
                // determine if there's enough product in stock
                if (chosenItem.stock_quantity > parseInt(answer.quantity)) {
                    // console.log('valid quantity!');
                    // update the product table in the bamazon db to reflect the remaining quantity for the product
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: chosenItem.stock_quantity - parseInt(answer.quantity),
                                product_sales: chosenItem.product_sales + (parseInt(answer.quantity) * chosenItem.price)
                            },
                            {
                                item_id: chosenItem.item_id
                            }
                        ],
                        function (error) {
                            if (error) throw error;
                            // console.log("inventory updated!");
                            // console.log(chosenItem);
                            // show the customer the total cost of the purchase
                            console.log(`\nThanks for your business!` + "\n" + "The total for your purchase is: US$" + parseInt(answer.quantity) * chosenItem.price);
                        }
                    );
                }
                else {
                    console.log(`Insufficient quantity!`);
                }
            });
    });

}

function howMany() {
    inquirer.prompt({
        name: "howMany",
        type: "input",
        message: "How many would you like?"
    }).then(function (answer) {
        // get info from chosen item
        // check if my store has enough inventory for products


    })
}