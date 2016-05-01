'use strict';
// ------ Require packages
var express = require('express');

// ------ Configure the application
var app = express();
var port = process.env.PORT || 3000;
var mode = 'dev' || 'build';

app.use(express.static(mode));

// ------ Build routes
app.get('/', function(req, res) {
  res.sendfile(mode + '/index.html');
});

// ------ Serve
app.listen(port, function() {
  console.log('Running on port ' + port);
});
