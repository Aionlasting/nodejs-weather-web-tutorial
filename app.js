const path = require("path"); // core node module
const express = require("express"); // npm module
const app = express();
const hbs = require('hbs');
// const bodyParser = require("body-parser");
// const ejs = require("ejs");

// custom directory for views folder...
// const viewsPath = path.join(__dirname, '../templates');
// app.set('views', viewsPath);


app.set('view engine', 'hbs');
app.use(express.static("public"));

//const partials = path.join(__dirname, '../views/partials');

hbs.registerPartials('./views/partials/');


// console.log(__dirname);
// console.log(__filename);

app.get('', (req, res) => {
  res.render('index', 
  {title: 'Chatter Bug App',
  name: 'Alexandre Mokbel'});
});

app.get('/about', (req, res) => {
  res.render('about', {
    name: 'Alexandre Mokbel'
  });
})

app.get("/help", (req, res) => {
  //res.send({ name: "Alex", age: 35 });
  res.render('help');
});

app.get('/products', (req, res) => {
  
  if(!req.query.search) {
    return res.send({error: 
    'You must provide a search term'});
  }
  console.log(req.query);

  res.send( {
    products: []
  });
});

app.get('/help/*', (req,res) => {
  res.render('404', { myPartial : '404help', name: 'Alexandre Mokbel' });
});

// This is a wildcard character, it should come last as anything will match it
app.get('*', (req, res) => {
  res.render('404', { myPartial: "404generic", name: "Alexandre Mokbel"});
  // res.send('My 404 page');
})

app.get("/residents", (req, res) => {
  res.send("RESIDENTS PAGE");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
