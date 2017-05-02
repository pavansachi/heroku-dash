var express = require('express');

var app = express();

app.get('/', function(req, res) {

    res.send('works!!');

});

// start server
app.listen(3000, function() {
    console.log('server started at 3000');
});