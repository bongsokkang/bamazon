var inquirer = require ('inquirer');
var mysql = require ("mysql");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Player1!',
  database : 'b_amazondb'
});
 
connection.connect();


function start () {
    var itemsList = [];

    connection.query('SELECT * FROM bamazon', function (error, results) {
        
    inquirer.prompt([
        {
            type: 'list',
            message: 'Choose item',
            name: 'choose',
            choices: function() {
                var choiceArray = [];
                for (var i = 0; i < results.length; i++) {
                  choiceArray.push(results[i].product);
                }
                return choiceArray;
              },
        }
    ])
    .then(function(data) {
       var chosenitem = data.choose;

    connection.query('SELECT * FROM bamazon WHERE product = ?', [chosenitem], 
    function (error,result) 
    {
    console.log("the price is $" + parseFloat(result[0.0].price));
    }
)

    })
})

};

start()