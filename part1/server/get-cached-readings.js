const getReadings = require('./get-readings');
// Initiate the cache. In our case it is a variable stored in memory
const cache = { temperature: null,
                  humidity: null 
};

// Get the sensor readings every 2 secs
setInterval(() => {
  getReadings((err, temperature, humidity) => {
    if (err) {
      return console.error(err);
    };
    /*
    Set the values of the cache on receiving new readings
    */
    cache.temperature = temperature;
    cache.humidity = humidity;
  });
}, 2000);

/* These functions are only to return the cached values, and do not make a call to
the sensor interface
*/

module.exports.getTemperature = () => cache.temperature;
module.exports.getHumidity = () => cache.humidity;
