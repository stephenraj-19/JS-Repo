function max(array) {
    let highestValue = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > highestValue) {
        highestValue = array[i];
      }
    }
        return highestValue;
  }
  console.log(max([12,34,56,1]));
  console.log(max([-12,-34,0,-56,-1]));  