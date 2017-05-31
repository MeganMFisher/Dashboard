const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  cors = require('cors')
  // config = require('./config.js')

var app = express();
app.use(bodyParser.json());
app.use('/', express.static(__dirname + './../public'));

var port = 3500;


var db = massive.connect({
    connectionString: process.env.database
    // connectionString: config.database || process.env.database
    // connectionString: config.database 
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
  db.getVisitors((err, visitorData) => {
    if (!err) {
      res.send(visitorData)
    }
  })
});

// *******************************************
// *           Sales and Returns             *
// *******************************************

app.get('/sales', (req, res, next) => {
  db.getSalesAndReturns((err, salesData) => {
    if (!err) {
      res.send(salesData)
    }
  })
});

// *******************************************
// *           Product Type Sold             *
// *******************************************

app.get('/product', (req, res, next) => {
  db.getProductTypesSold((err, productData) => {
    if (!err) {
      res.send(productData)
    }
  })
});

// *******************************************
// *           Product Inventory             *
// *******************************************

app.get('/inventory', (req, res, next) => {
  db.getProductInventory((err, inventoryData) => {
    if (!err) {
      res.send(inventoryData)
    }
  })
});

// *******************************************
// *           Product Inventory             *
// *******************************************

app.get('/payment', (req, res, next) => {
  db.getPaymentTypeReceived((err, paymentData) => {
    if (!err) {
      res.send(paymentData)
    }
  })
});


app.listen(process.env.PORT || port, function () {
  console.log('listening on port', this.address().port);
});