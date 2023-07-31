// addCommas.js
function addCommas(number) {
    // Convert the number to a string
    let numberString = number.toString();
  
    // Split the string into integer and decimal parts (if any)
    const [integerPart, decimalPart] = numberString.split('.');
  
    // Add commas for the integer part
    let formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Combine the integer and decimal parts (if any) to form the final formatted string
    let formattedNumber = decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
  
    // Add a negative sign if the number is negative
    if (number < 0) {
      formattedNumber = `-${formattedNumber}`;
    }
  
    return formattedNumber;
  }
  
  module.exports = addCommas;
  