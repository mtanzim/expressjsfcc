var express = require('express')
var crypto=require('crypto');
var app = express();

app.put('/message/:id', function(req, res) {
    var id=req.params.id;
    
    var hash = crypto.createHash('sha1')
       .update(new Date().toDateString()+id)
       .digest('hex');
    //console.log(hash);
    
    //res.end('Hello World! '+id);
    //console.log(id);
    res.end(hash);
  
});

app.listen(process.argv[2]);