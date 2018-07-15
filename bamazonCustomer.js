var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

function askUser() {
    connection.query("SELECT * FROM products", function (err, res) {

        res.forEach(function (item) {
            console.log(`----------------------------------------------------
Item ID: ${item.item_id}          
Product: ${item.product_name}
Price: $${item.price}`);
        })
        selectedProduct()
    });
}

function selectedProduct() {
    inquirer.prompt([{
        type: "input",
        name: "item",
        message: "Please input the Product ID that you would like to purchase",
    }, {
        type: "input",
        name: "quantity",
        message: "How many units would you like to purchase?",
    }]).then(answers => {
        var id = parseFloat(answers.item);
        var quantity = answers.quantity;
        var query = `SELECT * FROM products WHERE item_id = ${id}`;

        connection.query(query, function (err, res) {
            var item = res[0];
            var name = item.product_name;

            if (quantity > item.stock_quantity) {
                console.log("Insufficient quantity!")
            } else {
                purchaseItem(name, id, quantity);
            }
        })
    })
};


function purchaseItem(name, id, quantity) {
    var query = `UPDATE products SET stock_quantity =  stock_quantity - ${quantity} WHERE item_id = ${id};`;

    connection.query(query, function (err, res) {
        if (err) throw (err);
        console.log(`You successfully purchased ${quantity} units of ${name}!`)
        connection.end();
    })
};

askUser();