var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.get('/', function (req, res) {
  res.render('index');
});
var server = app.listen(5000, function () {
  console.log('Node server is running on http://localhost:5000');
});
    