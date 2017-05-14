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
        db.schema(function (err, data) {
            if (err) {
                console.log(err);
            } else {
                console.log('All tables successfully reset');
            }
        });
    })

app.set('db', db); 

var db = app.get('db'); 

  // *******************************************
  // *            Website Visitors             *
  // *******************************************

    app.get('/visitors', (req, res, next) => {
      db.getVisitors((response) => {
            res.status(200).send(response)
      })
    });

  // *******************************************
  // *           Sales and Returns             *
  // *******************************************

    app.get('/sales', (req, res, next) => {
      db.getSalesAndReturns((response) => {
            res.status(200).send(response)
      })
    });

  // *******************************************
  // *           Product Type Sold             *
  // *******************************************

    app.get('/product', (req, res, next) => {
      db.getProductTypesSold((response) => {
            res.status(200).send(response)
      })
    });

  // *******************************************
  // *           Product Inventory             *
  // *******************************************

    app.get('/inventory', (req, res, next) => {
      db.getProductInventory((response) => {
            res.status(200).send(response)
      })
    });

  // *******************************************
  // *           Product Inventory             *
  // *******************************************

    app.get('/payment', (req, res, next) => {
      db.getPaymentTypeReceived((response) => {
            res.status(200).send(response)
      })
    });


 app.listen(process.env.PORT || port, function() {
    console.log('listening on port', this.address().port );
  });