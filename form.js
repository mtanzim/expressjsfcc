var express = require('express')
var path=require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.post('/form', function (req, res) {
  if (!req.body) return res.sendStatus(400)
  res.end(req.body.str.split('').reverse().join(''));
})

/*
app.post('/form', function(req, res) {
  res.end('Hello World!');
})
*/
app.listen(process.argv[2]);