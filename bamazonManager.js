// For this file to be complete I would need to make the other three functions work for showing low inventory items, adding items to inventory, and adding new products. The required homework works fine but this I couldn't get in time.
var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table") 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Tremorcontrol1",
  database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log("                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ")
    managerChoices();
  });

  function displayItems() {
    var choiceArray = [];
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      console.table(res);
      for (let i= 0; i < res.length; i++) {
          choiceArray.push(res[i].item_name)
      }
    //   connection.end();

    });
  }

function managerChoices() {
    var choiceArray = ["View Items for Sale", "View Low Inventory Items", "Add to Inventory", "Add New Product"];
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
    //   console.table(res);
    //   for (let i= 0; i < res.length; i++) {
    //       choiceArray.push(res[i].item_name)
    //   }
    //   connection.end();
    prompManager(choiceArray);
    });
  }
  function prompManager(choices){
    inquirer.prompt([
        {
            type: "list",
            message: "What are you looking to do, Mr. Manager?",
            choices: ["View Items for Sale", "View Low Inventory Items", "Add to Inventory", "Add New Product"],
            name: "managerRoles"
        }
    ]).then(function(answers){
            var answers = choices[""];
            if(answers = "View items for Sale"){
                console.log("Current items for sale are: ");
                displayItems();
            }
            if(answers = "View Low Inventory Item"){
              console.log("manager want's to view low inventory items.");
            }
    })
}