function decimals(number, decimals) {
    if (typeof decimals !== "number" || decimals < 0) {
      throw new Error("decimals must be a positive integer");
    }  
    var numberString = String(number);  
    var decimalPointIndex = numberString.indexOf(".");  
    if (decimalPointIndex === -1) {
      return numberString;
    }
    var numberOfDigitsAfterDecimal = numberString.length - decimalPointIndex - 1;
    if (numberOfDigitsAfterDecimal <= decimals) {
      return numberString;
    }
    return parseFloat(numberString).toFixed(decimals);
  }
  console.log(decimals(2.100212, 2));
  console.log(decimals(2.100212, 3)); 
  console.log(decimals(2100, 2)); 