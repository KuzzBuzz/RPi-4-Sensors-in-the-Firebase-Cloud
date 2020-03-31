const express = require('express');
// Create an instance of a server application
const app = express();
const getCachedReadings = require('./get-cached-readings');

//  Utilize the syncronous methods exported from the 'get-cached-readings' module

app.get('/temperature', function(req, res) {
    res.send(getCachedReadings.getTemperature().toFixed(1) + '°C');
});

app.get('/humidity', function(req, res) {
  res.send(getCachedReadings.getHumidity().toFixed(1) + '%');
});

// Start up the server
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});