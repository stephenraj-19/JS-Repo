function min(array) {
    let lowestValue = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < lowestValue) {
        lowestValue = array[i];
      }
    }
        return lowestValue;
  }
  console.log(min([12,34,56,1]));   //1
  console.log(min([-12,-34,0,-56,-1])); //-56