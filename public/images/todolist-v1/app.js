const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

let items = ["To-do list item example 1", "To-do list item example 2"];
let count = items.length;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res) {

  let today = new Date();
  let dateFormat = {
    day: 'numeric',
    weekday: 'long',
    month: 'long'
  }

  let day = today.toLocaleDateString('en-US', dateFormat);

  res.render('list', {
    date: day,
    newListItems: items,
    itemsCount: count
  });

});


app.post('/', function(req, res) {
  let item = req.body.newItem;
  items.push(item);
  count++;

  res.redirect('/');

});

app.listen(port, function() {
  console.log("Server is running at port http://localhost:3000");
});






// var today = new Date();
// var currentDay = today.getDay();
// var day = "";
//
// switch (currentDay) {
//   case 0:
//     day = "Sunday"
//     break;
//   case 1:
//     day = "Monday"
//     break;
//   case 2:
//     day = "Tuesday"
//     break;
//   case 3:
//     day = "Wednesday"
//     break;
//   case 4:
//     day = "Thursday"
//     break;
//   case 5:
//     day = "Friday"
//     break;
//   case 6:
//     day = "Saturday"
//     break;
//   default: console.log("Error: current day is " + currentDay + ". It is not predefined in your code base.");
// }


// if (currentDay === 6 || currentDay === 0) {
//   var day = "Weekend";
// } else {
//   var day = "Weekday";
// }


// app.get('/', function(req, res) {
//
//   var today = new Date();
//   var currentDay = today.getDay();
//
//   if (currentDay === 6 || currentDay === 0) {
//     res.write("<h1>Yeahh it's the weekend!</h1>");
//     res.write("<p>Hello bunny ..</p>");
//     res.send();
//   } else {
//     res.write("<h1>Nooo it's not the weekend :(</h1>");
//     res.write("Pfff I have to work ..");
//     res.send();
//   }
//
// });
