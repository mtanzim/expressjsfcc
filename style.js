var express = require('express')
var path=require('path');
var stylus = require('stylus');
var app = express();

app.use(stylus.middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

/*
app.set('views',process.argv[3]);
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
})
*/
app.listen(process.argv[2]);