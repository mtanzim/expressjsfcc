var express = require('express')
var fs = require('fs');
var app = express();
app.get('/books', function(req, res) {
    fs.readFile(process.argv[3],'utf-8', function(err, data){
        if (err){
            throw err;
        } else {
            //console.log(data);
            res.send(JSON.parse(data));
        }
    });
  //res.send(process.argv[3]);
})
app.listen(process.argv[2]);