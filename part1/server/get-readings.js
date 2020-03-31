const sensor = require('node-dht-sensor');
/*
We abstract the functionality to read the sensor information inside the
getSensorReadings function. This function is also asyncronous. It accepts a callback
function as an argument
*/
const getReadings = (callback) => {
  sensor.read(22, 26, function (err, temperature, humidity) {
    if (err) {
      /*
      If there is an error, call the callback function with the error
      as its first argument
      */
     return callback(err);
    };
    /* If all is well, call the callback with "null" as the first argument to
    show that there is no error. The second and the third args would be the
    temperature and humidity
    */
   callback(null, temperature, humidity);
  });
};
// Export the function so it can be accessed externally
module.exports = getReadings;