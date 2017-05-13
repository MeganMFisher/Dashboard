var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config.js');

var app = express();
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

var port = 3000;


var db = massive.connect({
    // connectionString: process.env.database
    connectionString: config.database || process.env.database
  },
    function (err, localdb) {
        db = localdb;
        app.set('db', db);
        db.testDatabase(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log('All tables successfully reset');
            }
        });
    })

app.set('db', db); 

var db = app.get('db'); 

 app.listen(process.env.PORT || port, function() {
    console.log('listening on port', this.address().port );
  });