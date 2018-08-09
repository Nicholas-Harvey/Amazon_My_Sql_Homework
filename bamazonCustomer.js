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
    displayItems();
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
    promptCustomer(choiceArray);
    });
  }

  function promptCustomer(choices){
    inquirer.prompt([
        {
            type: "list",
            message: "What are you looking to purchase?",
            choices: choices,
            name: "purchasedItem"

        },
        {
            type: "input",
            message: "How many would you like to buy?",
            name: "purchaseQuantity"
        }
    ]).then(function(answers){
        // console.log(answers);
        var item = answers.purchasedItem;
        var quantity = (answers.purchaseQuantity);
// console.log(item);
// console.log(quantity);

        checkAvailability(item, quantity);
    })
  }

  function checkAvailability(item, quantity){
      connection.query("SELECT item_stock_count, item_price FROM products WHERE item_name = ? ", [item], function(err, results){
          if(err) throw err;
    //       var item = itemObj.purchasedItem;
    //   var quantity = parseInt(itemObj.purchaseQuantity);
      console.log(quantity);
          var itemsLeft = results[0].item_stock_count;
        //   console.log(itemsLeft);
          var itemPrice = results[0].item_price;
          var updatedInventory = itemsLeft - quantity;
        //   console.log(updatedInventory);
          var salesPrice = itemPrice * quantity;
          if(updatedInventory > -1){
              console.log("Hey, you just bought " + quantity + " " + item + " for $" + salesPrice + ". That's pretty neat!")
          updateDB(updatedInventory, item);
            } else{
                console.log("Sorry, either this item is sold out or your quantity request exceeds what we have in stock. And we don't do back-orders either so you'll have to live with this.")
                continuePrompt();
            }

      })
  }

  function updateDB(updatedInventory, item){
      connection.query("UPDATE products SET ? WHERE ?", [
          {
              item_stock_count: updatedInventory
          },
          {
              item_name: item
          }
      ], function (err, results){
          continuePrompt()
      })
  }

  function continuePrompt(){
      inquirer.prompt([
          {
              message: "Would you like to continue shopping?",
              type: "confirm",
              name: "continue"
          }
      ]).then(function(answers){
if(answers.continue){
    displayItems();
    
}else{
    console.log("Thank you for shopping!")
connection.end()
}
      })

  }