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
            name: 'hello',
            choices: function() {
                var choiceArray = [];
                for (var i = 0; i < results.length; i++) {
                  choiceArray.push(results[i].product);
                }
                return choiceArray;
              },
        }
    ])
    .then(function(err,data) {
       var chosenitem = data;

       connection.query('SELECT * FROM bamazon WHERE product =?', [chosenitem], 
       function (error,moredata) 
       {
        console.log(moredata.price);
    }
)

    })
})

};

start()