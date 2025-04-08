const convertToCelsius = function(degrees) {
  let celsius = (degrees - 32) * (5/9)
  celsius = Math.round(celsius * 10) / 10
  return celsius
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
