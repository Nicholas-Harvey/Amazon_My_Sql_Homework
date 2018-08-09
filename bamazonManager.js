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
            if(answers = choices[0]){
                console.log("Current Items for sale are: ");
                displayItems();
            }
    })
}